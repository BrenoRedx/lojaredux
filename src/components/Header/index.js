import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { BiPaperPlane } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function Header() {
  const compraSize = useSelector((state) => state.carrinho.length);

  return (
    <div className="container">
      <div>
        <Link to="/" className="logo--espaco">
          <BiPaperPlane size={70} color="#fff"></BiPaperPlane>
        </Link>
      </div>
      <div className="texto">Book Store</div>
      <Link className="reserva" to="/reservas">
        <div>
          <strong>Carrinhos</strong>
          <span>{compraSize}</span>
        </div>
      </Link>
    </div>
  );
}
