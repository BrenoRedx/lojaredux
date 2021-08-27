import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { BsBook, AiOutlineShoppingCart } from "react-icons/all";
import { useSelector } from "react-redux";

export default function Header() {
  const compraSize = useSelector((state) => state.carrinho.length);

  return (
    <div className="container-teste">
      <Link to="/" className="logo--espaco--teste">
        <BsBook size={70} color="#fff"></BsBook>
      </Link>
      <div className="texto">Book Store</div>
      <Link to="/Compra/">
        <AiOutlineShoppingCart
          size={50}
          color="#fff"
          className="carrinho-icone"
        />
      </Link>
      <div className="contagem"></div>
      <div className="contagem-number">{compraSize}</div>
    </div>
  );
}
