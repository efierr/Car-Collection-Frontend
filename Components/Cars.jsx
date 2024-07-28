import React, { useState, useEffect } from "react";
import Car from "./Car";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel styles
import "../css/Cars.css";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`${API}/cars`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resJSON) => {
        console.log(resJSON);
        setCars(resJSON);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="car-page">
      <h1 className="car-collection">Your Car Collection</h1>
      <Carousel className="cars" showThumbs={false} useKeyboardArrows autoPlay>
        {cars.map((car) => (
          <div key={car.id}>
            <Car car={car} />
            <img
              className="car-image"
              src={car.img_url}
              alt={`${car.make} ${car.model}`}
            />
            <Link to={`/cars/${car.id}`}>
              <p className="legend">{`${car.make} ${car.model}`}</p>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Cars;
