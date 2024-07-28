import React from "react";
import { Link } from "react-router-dom";
import "../css/Car.css";
const Car = ({ car }) => {
  return (
    <div className="car-page-container">
      <div className="car-container">
        <Link to={`/cars/${car.id}`}>
          <img className="car-image" src={car.img_url} alt={car.make} />
          {car.id} {car.make}
        </Link>
      </div>
    </div>
  );
};
export default Car;
