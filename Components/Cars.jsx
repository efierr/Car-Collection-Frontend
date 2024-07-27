import React, { useState, useEffect } from "react";
import Car from "./Car";
import "../css/Cars.css";
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
      <section className="cars">
        {cars.map((car) => (
          <Car key={car.id} car={car} />
        ))}
      </section>
    </div>
  );
};

export default Cars;
