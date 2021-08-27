/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Caroseul from "../../components/Caroseul";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get("books");
      setBooks(response.data);
    }
    loadApi();
  }, []);
  console.log(books);

  return (
    <div>
      <div className="container-image">
        <Caroseul />
      </div>
      <div className="box">
        {books.map((item, key) => {
          return (
            <li key={key}>
              <img src={item.image} alt={item.title} />
              <strong>{item.title}</strong>
              <div className="escritor">Kiyosaki, Robert T.</div>
              <span className="span">
                Status: {item.status ? "Disponível" : "Indisponível"}
              </span>
              <div className="escritor">
                1 oferta a partir de:
                {item.desconto ? (
                  <div className="teste">{item.price}</div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="Quantidade">Quantidade disponível : 2</div>
              <div className="texto-strong">
                R$
                {item.desconto ? (
                  <div>{item.valorcomdesconto}</div>
                ) : (
                  <div>{item.price}</div>
                )}
              </div>
              <Link to={`/Carrinho/${item.id}`} className="button-position">
                <button type="button" className="button-style">
                  Saiba Mais
                </button>
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}
