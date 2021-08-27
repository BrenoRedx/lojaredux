import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Compra from "./pages/Compra";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Carrinho/:id" component={Carrinho} />
      <Route path="/Compra/" component={Compra} />
    </Switch>
  );
}
