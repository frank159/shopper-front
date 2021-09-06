import axios from "axios";
import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalContextState";
import {BASE_URL} from "../constants/Url";

export const GlobalState = (props) => {
  const [produtos, setProdutos] = useState([]);
  const [actualPage, setActualPage] = useState("");
  const [back, setBack] = useState(false);
  const [loading, setLoading] = useState(true)
  const [text, setText] = useState('')
  const [info, setInfo] = useState({});

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = () => {
    axios
      .get(`${BASE_URL}/ListaProdutos`)
      .then((res) => {
        setProdutos(res.data.shopper);
        setLoading(false)
        console.log(res.data.shopper)
      })
      .catch((error) => {
        window.alert(error.message)
      });
  };

  const requests = {produtos, setProdutos};
  const filter = {text, setText, info, setInfo};

  return (
    <GlobalStateContext.Provider value={{ getProdutos, requests, back, setBack, actualPage, setActualPage, filter, loading, setLoading }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;