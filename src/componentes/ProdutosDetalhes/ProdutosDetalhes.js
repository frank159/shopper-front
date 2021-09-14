import React, { useContext } from "react";
import {PostCardContainer, PostCardContent, LeftContent , RightContent, Botão, NomeProduto, ValorProduto} from "./Styled";
import GlobalStateContext from "../../Context/GlobalContextState";

const ProdutosCardHistorico = (props) => {
  const { requests, AdicionarProduto } = useContext(GlobalStateContext);
  

  return (
    <PostCardContainer>
      <PostCardContent>
            <LeftContent >
              <NomeProduto>
              {props.name}
              </NomeProduto>
              <NomeProduto>
              {props.carrinhoName}
              </NomeProduto>
              <ValorProduto>
              {props.date}
              </ValorProduto>
            </LeftContent>
            <RightContent>
            </RightContent>
      </PostCardContent>
    </PostCardContainer>
  );
};

export default ProdutosCardHistorico;