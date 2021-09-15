import React from "react";
import { Router } from "./routes/routers"
import GlobalState from './Context/GlobalState'
import {HeaderHome} from "./componentes/headerHome/headerHome"

const App = () => {
  return (
    <div>
      <GlobalState>
        <HeaderHome/>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;