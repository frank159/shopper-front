import styled from "styled-components";
export const PostCardContainer = styled.div`
  width: 25vw;
  margin: 30px;
  border-radius: 5px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
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

export const LeftContent = styled.div`
  margin-bottom: 15px;
  padding: 5px;
  font-size: small;
`;

export const NomeProduto = styled.p`
  max-height: 30px;
  font-family: 'Dosis', sans-serif;
`

export const ValorProduto = styled.p`
  font-family: 'Dosis', sans-serif;
`

export const RightContent = styled.div`
  display: flex;
  justify-content: right;
  margin: 0px 20px 0px 20px;
  align-items: center;
`;

export const Botão = styled.button`
  background-color: #20ab77;
  border: 1px solid #f8f9fa;
  border-radius: 19px;
  color: #3c4043;
  font-family: arial,sans-serif;
  font-size: 14px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  min-width: 54px;
  text-align: center;
  cursor: pointer;
`;