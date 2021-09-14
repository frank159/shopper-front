import React, { useContext } from "react"
import { Conteiner, ShopperBotao } from "./Styled"
import icon from "../../img/icon.png"
import GlobalStateContext from "../../Context/GlobalContextState";
import {goToHomePage} from "../../routes/coordinator"
import { useHistory } from "react-router";

export const HeaderHistorico = () => {
    const { cart } = useContext(GlobalStateContext);
    const history = useHistory();

    return(
        <Conteiner>
            <ShopperBotao onClick={() => goToHomePage(history)} type="image" src={icon}/>
       </Conteiner>
    )
}