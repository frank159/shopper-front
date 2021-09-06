import styled from "styled-components";
import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';
import CardContent from "@material-ui/core/CardContent";
import { ButtonBase } from "@material-ui/core";

export const PostCardContainer = styled(Card)`
  width: 25vw;
  margin: 30px;
  background-color: #f5f5f5;
  @media screen and (max-width: 992px) {
    width: 80vw;
  }
  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`;

export const PostCardContent = styled(CardContent)`
  display: flex;
  min-height: 10vh;
  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

export const Cima = styled.div`
margin-bottom: 15px;
`;

export const Baixo = styled.div`
display: fle;
`;

export const Botão = styled(Button)`
  position: relative;
  margin-bottom: 150px;
`;