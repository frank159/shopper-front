import React, { useContext } from "react"
import ProdutosCard from "../../componentes/ProdutosCard/ProdutosCard"
import GlobalStateContext from "../../Context/GlobalContextState"
import { Conteiner, CarrinhoConteiner, ProdutosCards, Paginaçao } from "./Styled"
import Paginação from "../../componentes/PaginaçaoComponente/paginaçaoProdutos"

import { Carrinho } from "./Carrinho";

export const HomePage = () => {
  const { AdicionarProduto, requests, cart, currentProdutos } = useContext(GlobalStateContext);

  const ListaProdutos =
    !requests.loading &&
    currentProdutos &&
    currentProdutos.map((produtos) => {
      return (
        <ProdutosCard
          key={produtos.id}
          id={produtos.id}
          name={produtos.name}
          price={produtos.price}
          qty_stock={produtos.qty_stock}
          AdicionarProduto={AdicionarProduto}
        />
      );
    });

  return (
    <div className="conteiner">
      <Conteiner>

        <ProdutosCards>
          {ListaProdutos}
          <Paginaçao>
            <Paginação />
          </Paginaçao>
        </ProdutosCards>
        <CarrinhoConteiner>
          <Carrinho cart={cart} />
        </CarrinhoConteiner>
      </Conteiner>
    </div>
  )
}