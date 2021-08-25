/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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
      <div className="box">
        {books.map((item, key) => {
          return (
            <li key={key}>
              <img src={item.image} alt={item.title} />
              <strong>{item.title}</strong>
              <span>Status: {item.status ? "Disponível" : "Indisponível"}</span>
              <strong className="texto-strong">{item.price}</strong>
              <button type="button" onClick={() => handleAdd(item)}>
                <div>Comprar</div>
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}
