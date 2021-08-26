/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./index.css";

export default function Home() {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get("books");
      setBooks(response.data);
    }
    loadApi();
  }, []);
  console.log(books);

  function handleAdd(item) {
    dispatch({
      type: "ADD_COMPRA",
      item,
    });
  }
  return (
    <div>
      <div className="container-image">
        <div className="background-image"></div>
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
              <div className="escritor">1 oferta a partir de:</div>
              <div className="texto-strong">{item.price}</div>
              <Link to="/Carrinho" className="button-position">
                <button
                  type="button"
                  onClick={() => handleAdd(item)}
                  className="button-style"
                >
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
