import React, { useContext } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import {
  PostCardContainer,
  PostCardContent,
  Cima,
  Baixo,
  Botão
} from "./Styled";
import GlobalStateContext from "../../Context/GlobalContextState";

const PatientCard = (props) => {
  const { requests } = useContext(GlobalStateContext);

  return (
    <PostCardContainer>
      <PostCardContent>
        <div>
            <Cima>
              <Typography gutterBottom variant="h8">
              {props.name}
              </Typography>
              <Typography gutterBottom variant="subtitle1">
              R${props.price}
              </Typography>
            </Cima>
           
            <Baixo>
              <Botão>Adicionar Ao Carrinho</Botão>
            </Baixo>
        </div>
      </PostCardContent>
    </PostCardContainer>
  );
};

export default PatientCard;