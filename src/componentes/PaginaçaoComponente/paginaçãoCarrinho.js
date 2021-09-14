import React, { useContext } from "react";
import { Button } from "./styled"
import GlobalStateContext from "../../Context/GlobalContextState";

const PaginaçaoCart = () => {
    const { pagesCart, setCurrenteCartPage } = useContext(GlobalStateContext);

    return (
        Array.from(Array(pagesCart), (cart, index) => {
            return( 
                    <Button value={index} onClick={(e) => setCurrenteCartPage(Number(e.target.value))}>
                        {index + 1}
                    </Button>
                )
            })
        )}

export default PaginaçaoCart;