import React, { useContext } from "react";
import GlobalStateContext from "../../Context/GlobalContextState";
import useForm from "../../hooks/useForm"
import { Input, Conteiner, Button, ConteinerInput, ConteinerButton } from "./Styled"
import PaginaçaoCart from "../../componentes/PaginaçaoComponente/paginaçãoCarrinho"
import axios from "axios";
import { BASE_URL } from "../../constants/const";

const ImputCart = () => {
    const [form, onChange] = useForm({ name: "", date: "" })
    const { cart, compras, setCompras } = useContext(GlobalStateContext);

    function EnviarPedido() {

        const requests = []

        for (let i = 0; i < cart.length; i++) {
            const body = { qty_stock: cart[i].qty_stock - cart[i].qty_order }
            const request = axios
                .post(`${BASE_URL}/update/${cart[i].id}`, body)
            requests.push(request)
        }
        axios.all(requests)
            .then(() => {
                const compra = {
                    cliente: form,
                    carrinho: [...cart]
                }
                setCompras(compra)
                document.location.reload(true);
                window.alert("pedido enviado!")
                localStorage.setItem("compras", JSON.stringify(compras))
            })
            .catch((error) => {
                window.alert(error)
            })
    }

    return (
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
                <PaginaçaoCart />
                <Button onClick={EnviarPedido}>Enviar</Button>
            </ConteinerButton>
        </Conteiner>
    )
}

export default ImputCart;