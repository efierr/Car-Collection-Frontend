import React from "react";
import { Link } from "react-router-dom";

const Car = ({ car }) => {
  return (
    <div>
      <Link to={`/cars/${car.id}`}>
        {car.id} {car.make} {car.img_url}
      </Link>
    </div>
  );
};
export default Car;
