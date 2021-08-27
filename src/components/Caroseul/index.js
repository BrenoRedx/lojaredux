import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./index.css";

const items = [
  {
    src: "https://hed.pearson.com.br/api/images/res/1200/400/blog/63/notebook-aberto-encostado-em-livros-fisicos-dentro-da-biblioteca-da-universidade.jpg",
    altText: "Imagem 1",
    caption: "Imagem 1",
  },
  {
    src: "https://www.uniabeu.edu.br/wp-content/uploads/2019/05/biblioteca.jpg",
    altText: "Imagem 2",
    caption: "Imagem 2",
  },
  {
    src: "https://www.uniarp.edu.br/home/wp-content/themes/uniarpv2.1/images/biblioteca-header.jpg",
    altText: "Imagem 3",
    caption: "Imagem 3",
  },
];

const Caroseul = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          className="imagem-tamanho-teste"
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Caroseul;
