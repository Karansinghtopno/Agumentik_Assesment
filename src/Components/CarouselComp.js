import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComp = () => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "450px", filter: "grayscale(100%)" }}
          src="https://images.unsplash.com/photo-1508214665949-7b7cb56e3bb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ella Fitzgerald</h3>
          <p>
            She was noted for her purity of tone, impeccable diction, phrasing,
            timing, intonation, and a "horn-like" improvisational ability,
            particularly in her scat singing.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "450px", filter: "grayscale(100%)" }}
          src="https://images.unsplash.com/photo-1517332998425-de3a0f3fc185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Aretha Franklin</h3>
          <p>Aretha" and "Queen of Soul" redirect here. For other uses, see Aretha (disambiguation) and Queen of Soul (disambiguation).</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "450px", filter: "grayscale(100%)" }}
          src="https://images.unsplash.com/photo-1521417531039-75e91486cc40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Dionne Warwick</h3>
          <p>
            Warwick ranks among the 40 biggest U.S. hit makers between 1955 and
            1999, based on her chart history on Billboard's Hot 100 pop singles
            chart.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
