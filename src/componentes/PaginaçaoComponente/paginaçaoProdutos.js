import React, { useContext } from "react";
import { Button } from "./styled"
import GlobalStateContext from "../../Context/GlobalContextState";

const Paginação = () => {
    const { pages, setCurrentePage } = useContext(GlobalStateContext);

    return (
        Array.from(Array(pages), (produtos, index) => {
            return (<Button value={index} onClick={(e) => setCurrentePage(Number(e.target.value))}>
                {index + 1}
            </Button>)
        })
    )
}

export default Paginação;