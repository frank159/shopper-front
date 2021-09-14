import React, { useContext } from "react"
import { 
    Conteiner, 
    ShopperBotao, 
    QuandtidaProdutos, 
    Button, 
    PreçoTotal,
    ConteinerButton,
    ConteinerInfo
} from "./Styled"
import icon from "../../img/icon.png"
import GlobalStateContext from "../../Context/GlobalContextState";
import {goToHistoricoPedidos} from "../../routes/coordinator"
import { useHistory } from "react-router";

export const HeaderHome = () => {
    const { cart } = useContext(GlobalStateContext);
    const history = useHistory();
    
    const getTotalValue = () => {
        let totalValue = 0
    
        for(let cartItem of cart) {
          totalValue += cartItem.price * cartItem.qty_order
          console.log("totalValue", totalValue)
        }
    
        return totalValue.toFixed(2)
      }

    return(
        <Conteiner>
            <ConteinerButton>
                <ShopperBotao type="image" src={icon}/>
                <Button onClick={() => goToHistoricoPedidos(history)}>
                    Historico
                </Button>
            </ConteinerButton>
            <ConteinerInfo>
                <PreçoTotal>
                    {cart.length} {cart.length <= 1 ? "Produto" : "Produtos" } 
                </PreçoTotal>
                <QuandtidaProdutos>
                R$ {getTotalValue()}
                </QuandtidaProdutos>
            </ConteinerInfo>
       </Conteiner>
    )
}