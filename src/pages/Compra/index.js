import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { BsFillTrashFill, MdAddCircle, MdRemoveCircle } from "react-icons/all";
import { removeCompra } from "../../store/modules/carrinho/actions";
import { updateAmountBookRequest } from "../../store/modules/carrinho/actions";

export default function Compra() {
  const dispatch = useDispatch();
  const compraInfo = useSelector((state) => state.carrinho);

  function handleRemove(id) {
    dispatch(removeCompra(id));
  }
  function decrementAmount(item) {
    dispatch(updateAmountBookRequest(item.id, item.amount - 1));
  }
  function incrementAmount(item) {
    dispatch(updateAmountBookRequest(item.id, item.amount + 1));
  }
  console.log(compraInfo);

  return (
    <>
      <div className="container-compra">
        <h1 className="teste1">Carrinho de Compras</h1>
        <div className="line"></div>
        <div className="box-compra">
          {compraInfo.map((item, key) => {
            return (
              <li key={key}>
                <img src={item.image} alt={item.title}></img>
                <div className="texto1">{item.title}</div>
                <h2 className="texto2">
                  R$
                  {item.desconto ? (
                    <div>{item.valorcomdesconto}</div>
                  ) : (
                    <div>{item.price}</div>
                  )}
                </h2>
                {item.status ? (
                  <div className="texto3">Item com desconto</div>
                ) : (
                  <div>Item não possui desconto</div>
                )}
                <div className="texto4">Quantidade de itens:</div>
                <button
                  type="button"
                  className="button-icon-diminuir"
                  onClick={() => decrementAmount(item)}
                >
                  <MdRemoveCircle
                    className="icone-compra"
                    size={25}
                  ></MdRemoveCircle>
                </button>
                <div className="texto5">{item.amount}</div>
                <button
                  type="button"
                  className="button-icon-aumentar"
                  onClick={() => incrementAmount(item)}
                >
                  <MdAddCircle className="icone-compra" size={25}></MdAddCircle>
                </button>

                <button type="button" className="button-style-compra">
                  Comprar
                </button>
                <div className="icone-texto">Excluir item</div>
                <button type="button" className="button-icon-delete">
                  <BsFillTrashFill
                    className="icone-compra"
                    size={30}
                    color="red"
                    onClick={() => handleRemove(item.id)}
                  />
                </button>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}
