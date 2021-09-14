import styled from "styled-components";

export const PostCardContainer = styled.div`
  width: 25vw;
  margin: 10px 30px 30px 30px;
  border-radius: 5px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  background-color: #f2f2f2;
  @media screen and (max-width: 992px) {
    width: 80vw;
  }
  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`;

export const PostCardContent = styled.div`
display: flex;
  min-height: 10vh;
  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

export const LeftContent  = styled.div`
margin-bottom: 15px;
padding: 5px;
font-size: small;
`;

export const NomeProduto = styled.p`
   white-space: nowrap; 
    width: 15em; 
    overflow: hidden;
    text-overflow: ellipsis;
`

export const ValorProduto = styled.p`
`

export const Quantidade = styled.div`
padding: 3px;
`

export const RightContent = styled.div`
display: flex;
justify-content: right;
margin: 0px 20px 0px 20px;
align-items: center;
`;

export const Botão = styled.button`
    background-color: #20ab77;
    border: none;
    border-radius: 4px;
    color: #3c4043;
    font-family: arial,sans-serif;
    font-size: 14px;
    padding: 0 16px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
`;