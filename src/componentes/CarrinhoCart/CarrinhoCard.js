import React, { useContext } from "react";
import {
  PostCardContainer,
  PostCardContent,
  ValorProduto,
  RightContent,
  LeftContent,
  NomeProduto,
  Quantidade,
  Botão
} from "./Styled";
import GlobalStateContext from "../../Context/GlobalContextState";

const CarrinhoCart = ({ name, price, id, qty_order, qty_stock }) => {
  const { AdicionarProduto, RemoverProduto } = useContext(GlobalStateContext);

  const priceOrder = price * qty_order


  return (
    <PostCardContainer>
      <PostCardContent>
        <LeftContent>
          <NomeProduto>
            {name}
          </NomeProduto>
          <ValorProduto>
            R${priceOrder.toFixed(2)}
          </ValorProduto>
          Estoque: {qty_stock}
        </LeftContent>
        <RightContent>
          <Botão onClick={() => AdicionarProduto(id, name, price, qty_stock, priceOrder)} >+</Botão>
          <Quantidade>
            {qty_order}
          </Quantidade>
          <Botão onClick={() => RemoverProduto(id)}>-</Botão>
        </RightContent>
      </PostCardContent>
    </PostCardContainer>
  );
};

export default CarrinhoCart;