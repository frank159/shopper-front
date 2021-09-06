import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom";
import {HeaderHome} from "../../componentes/headerHome/headerHome"
import PatientCard from "../../componentes/ProdutosCard/ProdutosCard"
import GlobalStateContext from "../../Context/GlobalContextState"
import { goToPokeDetalhes} from "../../routes/coordinator"
import { Conteiner, CarrinhoConteiner, ProdutosCards } from "./Styled"git
import {BASE_URL} from "../../constants/Url"
import { Carrinho } from "../../componentes/Carrinho/Carrinho";

export const HomePage = () => {
    const history = useHistory();
    const { requests, getProdutos, loading, setLoading } = useContext(GlobalStateContext);
    
    useEffect(() => {
      getProdutos()
     },[])

    const onClickCard = (id) => {
      goToPokeDetalhes(history, id);
    };

    const ListaProdutos =
    !requests.loading &&
    requests.produtos &&
    requests.produtos.map((produtos) => {
      return (
      
        <PatientCard
          key={produtos.id}
          name={produtos.name}
          price={produtos.price}
          qty_stock={produtos.qty_stock}
        />
      );
    });
    return (
        <div className="conteiner">
            <HeaderHome/>
            <Conteiner>
              <ProdutosCards>
                {ListaProdutos}
              </ProdutosCards>
              <CarrinhoConteiner>
                <Carrinho/>
              </CarrinhoConteiner>
            </Conteiner>
        </div>
    )
}