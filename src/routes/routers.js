import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { HomePage} from "../pages/homePage/homePage"
import { HistoricoPedidos } from "../pages/historicoPedidos/historicoPedidos"

export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/historico">
                    <HistoricoPedidos />
                </Route>
            </Switch>
        </BrowserRouter>
    )

}