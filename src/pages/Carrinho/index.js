import React, { useEffect, useState } from "react";
import { BsCreditCard } from "react-icons/bs";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addCompraRequest } from "../../store/modules/carrinho/actions";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import api from "../../services/api";

export default function Carrinho() {
  const dispatch = useDispatch();
  const [saibamais, setBooks] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function loadApi() {
      const response = await api.get(`books/${id}`);
      setBooks(response.data);
    }
    loadApi();
  }, [id]);

  console.log(saibamais);

  function handleAdd(id) {
    dispatch(addCompraRequest(id));
  }

  return (
    <div className="body-color">
      <div className="container-carrinho">
        <div className="container-descricao">
          <h2>Descrição do Produto</h2>
          <div className="descricao-text">{saibamais.description}</div>
        </div>
        <img src={saibamais.imagefull} alt="teste"></img>
        <h2 className="title">{saibamais.title}</h2>
        <div className="texto-h3">
          Autor: Saraiva Educação| Marca: Saraiva Jur
        </div>
        <div className="compra">
          <div className="texto-card-compra">Produto Físico</div>
          <div className="texto-card-compra2">Escolha uma oferta:</div>
        </div>
        <div className="card-compra2">
          <div className="texto-card-compra2-1">Loja: Book Store</div>
          <div className="texto-card-compra2-2">
            R${" "}
            {saibamais.desconto ? (
              <div>{saibamais.valorcomdesconto}</div>
            ) : (
              <div>{saibamais.price}</div>
            )}
          </div>
        </div>
        <div className="card-compra">
          <div className="texto-card-compra3">
            Vendido e entregue por: Book Store
          </div>
          <div className="texto-card-compra4">R$ {saibamais.price}</div>
          <div className="texto-card-compra5">
            R${" "}
            {saibamais.desconto ? (
              <div>{saibamais.valorcomdesconto}</div>
            ) : (
              <div>{saibamais.price}</div>
            )}
          </div>
          <div className="texto-card-compra6">
            {saibamais.desconto ? (
              <div>Economize até R${saibamais.desconto}</div>
            ) : (
              <div></div>
            )}
          </div>
          <div>
            <BsCreditCard className="icon-card" size={40} />
          </div>
          <div className="texto-card-compra7">
            Cartão Book Store: R${" "}
            {saibamais.desconto ? (
              <div>{saibamais.valorcomdesconto}</div>
            ) : (
              <div>{saibamais.price}</div>
            )}
            - em 1x vez
          </div>
          <div className="texto-card-compra8">
            Quantidade disponível: {saibamais.amount}
          </div>
          <button
            className="button-card-compra"
            onClick={() => handleAdd(saibamais.id)}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
