import React, { useContext } from "react"
import CarrinhoCard from "../../componentes/CarrinhoCart/CarrinhoCard"
import ImpotCart from "../../componentes/inputCart/inputCart"
import GlobalStateContext from "../../Context/GlobalContextState";


export const Carrinho = () => {
    const {currentProdutosCart} = useContext(GlobalStateContext);

    return(
        <>
            <ImpotCart/>
            {currentProdutosCart.map((cartItem) => ( 
                <CarrinhoCard 
                    key={cartItem.id} 
                    id={cartItem.id}
                    qty_stock={cartItem.qty_stock}
                    qty_order={cartItem.qty_order}
                    name={cartItem.name} 
                    price={cartItem.price}/>
                    ))}
                    
        </>
    )
}