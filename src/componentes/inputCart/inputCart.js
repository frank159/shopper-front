import React, { useContext } from "react";
import GlobalStateContext from "../../Context/GlobalContextState";
import useForm from "../../hooks/useForm"
import { Input, Conteiner, Button, ConteinerInput, ConteinerButton } from "./Styled"
import PaginaçaoCart from "../../componentes/PaginaçaoComponente/paginaçãoCarrinho"



const ImpotCart = () => {
    const [form, onChange, clear ] = useForm({ name: "", date: ""})
    const { cart, compras } = useContext(GlobalStateContext);

    function EnviarPedido() {
    const compra = { 
        cliente: form,
        carrinho: [...cart]
    }
    compras.push(compra)
    localStorage.setItem("compras", JSON.stringify(compras))
}

    return(
        <Conteiner>
            <ConteinerInput>
                <Input
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    placeholder={"Nome"}
                    label={"name"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"name"}
                />
                <Input
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    label={"date"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"date"}
                    />
            </ConteinerInput>
            <ConteinerButton>
                <PaginaçaoCart/>
                <Button onClick={EnviarPedido} clear>Enviar</Button>
            </ConteinerButton>
        </Conteiner>
    )
}

export default ImpotCart;