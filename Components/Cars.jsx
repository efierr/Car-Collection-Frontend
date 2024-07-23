import React, { useState, useEffect } from "react";
import Car from "./Car";

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
    <div>
      <h1>Your Car Collection</h1>
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Cars;
