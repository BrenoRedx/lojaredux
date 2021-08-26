import React from "react";
import "./index.css";
import { BsCreditCard } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function Carrinho() {
  const saibamais = useSelector((state) => state.carrinho);

  return (
    <div className="body-color">
      <div className="container-carrinho">
        <div className="container-descricao">
          <h2>Descrição do Produto</h2>
          <div className="descricao-text">
            Napoleon Hill revela que quebrou o código mental do diabo e o forçou
            a confessar os seus segredos. O manuscrito que resultou deste feito
            - "Mais Esperto que o Diabo"- mostrou-se tão controverso, que acabou
            escondido por mais de 70 anos. Usando sua habilidade legendária para
            chegar a raiz do potencial humano, Hill cava profundamente para
            identificar os maiores obstáculos que enfrentamos na busca de nossas
            metas pessoais - incluindo o medo, procrastinação, a raiva e a
            inveja - como ferramentas orquestradas pelo próprio diabo. Esses
            métodos ocultos de controle podem levar-nos a ruína, e Hill revela
            os 7 princípios que eficazmente poderão combater a alienação e
            levar-nos finalmente ao triunfo e ao sucesso. Fascinante,
            provocativo e encorajador, "Mais Esperto que o Diabo" mostra como
            criar a sua própria senha para o sucesso, harmonia e realização em
            um momento de tantas incertezas e medos.
          </div>
        </div>
        <img src={saibamais[0].imagefull} alt="teste"></img>
        <h2 className="title">{saibamais[0].title}</h2>
        <div className="texto-h3">
          Autor: Saraiva Educação| Marca: Saraiva Jur
        </div>
        <div className="compra">
          <div className="texto-card-compra">Produto Físico</div>
          <div className="texto-card-compra2">Escolha uma oferta:</div>
        </div>
        <div className="card-compra">
          <div className="texto-card-compra3">
            Vendido e entregue por: Book Store
          </div>
          <div className="texto-card-compra4">{saibamais[0].price}</div>
          <div className="texto-card-compra5">R$ 27,90</div>
          <div className="texto-card-compra6">Economize até R$ 15,00 (35%)</div>
          <div>
            <BsCreditCard className="icon-card" size={40} />
          </div>
          <div className="texto-card-compra7">Cartão Book Store: R$ 27,90</div>
          <button className="button-card-compra">Comprar</button>
        </div>
      </div>
    </div>
  );
}
