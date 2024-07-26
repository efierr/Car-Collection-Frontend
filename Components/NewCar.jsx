import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;
import '../css/NavBar.css'


function NewCar() {
  const [newCarDetails, setNewCarDetails] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    price: 0,
    is_favorite: false,
  });

  let navigate = useNavigate();

  const handleTextChange = (event) => {
    setNewCarDetails({
      ...newCarDetails,
      [event.target.id]: event.target.value,
    });
  };
  function addCar() {
    fetch(`${API}/cars`, {
      method: "POST",
      body: JSON.stringify(newCarDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate("/cars");
      })
      .catch((error) => console.error(error));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addCar();
    setNewCarDetails({
      make: "",
      model: "",
      year: "",
      color: "",
      price: 0,
      is_favorite: false,
    });
  };
  return (
    <div>
      <h1>Car New Form</h1>
      <form className="Form-Container" onSubmit={handleSubmit}>
        <label htmlFor="make">Make:</label>
        <input
          id="make"
          type="text"
          value={newCarDetails.make || ""}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="model">Model:</label>
        <input
          id="model"
          type="text"
          value={newCarDetails.model || ""}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="year">Year:</label>
        <input
          id="year"
          type="number"
          value={newCarDetails.year || ""}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="color">Color:</label>
        <input
          id="color"
          type="text"
          value={newCarDetails.color || ""}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={newCarDetails.price || ""}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Is Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          checked={newCarDetails.is_favorite || false}
          onChange={handleTextChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewCar;
