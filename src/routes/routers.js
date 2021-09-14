import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { HomePage } from "../pages/homePage/homePage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    )

}