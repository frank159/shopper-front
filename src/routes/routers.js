import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { HomePage} from "../pages/homePage/homePage"
import { PokeDetalhes} from "../pages/pokeDetalhes/PokeDetalhes"

export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/detalhes/:id">
                    <PokeDetalhes />
                </Route>
            </Switch>
        </BrowserRouter>
    )

}