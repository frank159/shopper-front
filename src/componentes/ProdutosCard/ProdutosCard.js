import React, { useContext } from "react";
import {PostCardContainer, PostCardContent, LeftContent , RightContent, Botão, NomeProduto, ValorProduto} from "./Styled";
import GlobalStateContext from "../../Context/GlobalContextState";

const ProdutosCard = (props) => {
  const { requests, AdicionarProduto } = useContext(GlobalStateContext);

  return (
    <PostCardContainer>
      <PostCardContent>
            <LeftContent >
              <NomeProduto>
              {props.name}
              </NomeProduto>
              <ValorProduto>
              R${props.price}
              </ValorProduto>
            </LeftContent>
            <RightContent>
              <Botão onClick={() => AdicionarProduto(props.id, props.name, props.price, props.qty_stock)}>Adicionar</Botão>
            </RightContent>
      </PostCardContent>
    </PostCardContainer>
  );
};

export default ProdutosCard;