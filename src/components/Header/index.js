import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { BsBook, AiOutlineShoppingCart } from "react-icons/all";
import { useSelector } from "react-redux";

export default function Header() {
  const compraSize = useSelector((state) => state.carrinho.length);

  return (
    <div className="container">
      <Link to="/">
        <BsBook size={70} color="#fff" className="logo--espaco"></BsBook>
      </Link>
      <div className="texto">Book Store</div>
      <div className="pesquisa">
        <input
          type="text"
          name="Pesquisa de Livros"
          placeholder="Pesquisa de Livros"
          className="input-class"
        ></input>
      </div>
      <Link to="/Carrinho">
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
