import React from "react"
import { useHistory } from "react-router";
import { Conteiner, ConteinerImg, TextoBotao, PokeButton, Espaço } from "./Styled"
import Button from '@material-ui/core/Button';
import icon from "../../img/icon.png"

export const HeaderHome = () => {
    const history = useHistory();
    return(
        <Conteiner>
            <PokeButton type="image" src={icon}/>
       </Conteiner>
    )
}