import styled from "styled-components";

export const Conteiner = styled.div`
  margin-top: 5vh;
  margin-bottom: 2vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const CarrinhoConteiner = styled.div`
background-color: white;
margin: 15px;
grid-column: 2/3;
height: 100vh;
border-radius: 5px;
`

export const ProdutosCards = styled.div`
  background-color: white;
  margin: 15px;
  border-radius: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  grid-column: 1/2;
`;