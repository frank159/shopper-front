import React, { useContext } from "react"
import { HeaderHistorico } from "../../componentes/headerHistorico/headerHistorico";
import GlobalStateContext from "../../Context/GlobalContextState"
import { ScreenContainer } from "./Styled"
import ProdutosCardHistorico from "../../componentes/ProdutosDetalhes/ProdutosDetalhes"

export const HistoricoPedidos = () => {
    const { compras, requests } = useContext(GlobalStateContext);

    const ListaProdutos =
    !requests.loading &&
    compras &&
    compras.map((compras) => {
      return (
      
        <ProdutosCardHistorico
          name={compras.cliente.name}
          date={compras.cliente.date}
          carrinhoName={compras.carrinho.name}
        />
      );
    });

    return (
        <ScreenContainer>
            <HeaderHistorico/>
            {ListaProdutos}
        </ScreenContainer>
    )
}
