import axios from "axios";
import { BASE_URL } from "../constants/const";
import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalContextState";

export const GlobalState = (props) => {
  const [cart, setCart] = useState([])
  const [info, setInfo] = useState({})
  const [text, setText] = useState('')
  const [back, setBack] = useState(false)
  const [compras, setCompras] = useState([])
  const [loading, setLoading] = useState(true)
  const [produtos, setProdutos] = useState([])
  const [actualPage, setActualPage] = useState("")
  const [priceTotal, setPriceTotal] = useState([])
  const [currentePage, setCurrentePage] = useState(0)
  const [currenteCartPage, setCurrenteCartPage] = useState(0)
  const [produtosPorPage, setProdutosPorPage] = useState(10)
  const [produtosCartPage, setProdutosCartPage] = useState(25)


  useEffect(() => {
    getProdutos()
  }, []);

  const getProdutos = () => {
    axios
      .get(`${BASE_URL}/ListaProdutos`)
      .then((res) => {
        setProdutos(res.data.shopper)
        setLoading(false)
        setCompras(JSON.parse(localStorage.getItem("setCompras")) || [])
      })
      .catch((error) => {
        window.alert(error.message)
      });
  };

  /////----paginaçao produtos----/////

  const pages = Math.ceil(produtos.length / produtosPorPage)
  const startIndex = currentePage * produtosPorPage
  const endIndex = startIndex + produtosPorPage
  const currentProdutos = produtos.slice(startIndex, endIndex)

  /////----paginaçao carrinho----/////

  const pagesCart = Math.ceil(cart.length / produtosCartPage)
  const startIndexCart = currenteCartPage * produtosCartPage
  const endIndexCart = startIndexCart + produtosCartPage
  const currentProdutosCart = cart.slice(startIndexCart, endIndexCart)

  /////--------------------------/////

  function AdicionarProduto(id, name, price, qty_stock) {
    const filterCart = cart.filter((item) => item.id === id)
    if (filterCart.length === 0) {
      const itemObject = { id, name, price, qty_stock: qty_stock - 1, qty_order: 1 }
      setCart([...cart, itemObject])
    } else {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          item.qty_stock--
          item.qty_order++
        } return item
      })
      setCart(newCart)
    }
  }

  function RemoverProduto(id) {
    if (cart[0].qty_order === 1) {
      const productInCart = cart.find(product => product.id === id)
      if (!productInCart) return
      const newCart = cart.filter(product => product.id !== productInCart.id)
      setCart(--productInCart.amount ? [...newCart, productInCart] : newCart)
    } else {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          item.qty_stock++
          item.qty_order--
        } return item

      })
      setCart(newCart)
    }
  }

  const requests = { produtos, setProdutos, loading, setLoading };
  const filter = { text, setText, info, setInfo };

  return (
    <GlobalStateContext.Provider value={{
      RemoverProduto,
      AdicionarProduto,
      getProdutos,
      requests,
      back,
      setBack,
      actualPage,
      setActualPage,
      filter,
      loading,
      setLoading,
      cart,
      setCart,
      info,
      setInfo,
      produtosPorPage,
      setProdutosPorPage,
      currentePage,
      setCurrentePage,
      pages,
      currentProdutos,
      pagesCart,
      currentProdutosCart,
      setProdutosCartPage,
      compras,
      setCompras,
      currenteCartPage,
      setCurrenteCartPage,
      priceTotal,
      setPriceTotal
    }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;