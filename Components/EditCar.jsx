import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;
import "../css/EditCar.css";
function EditCar() {
  const [carDetails, setCarDetails] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    price: 0,
    is_favorite: false,
  });
  let { id } = useParams();
  let navigate = useNavigate();

  const handleTextChange = (event) => {
    const { id, value, type, checked } = event.target;
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    fetch(`${API}/cars/${id}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resJSON) => {
        console.log(resJSON);
        setCarDetails(resJSON);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const updateCar = () => {
    fetch(`${API}/cars/${id}`, {
      method: "PUT",
      body: JSON.stringify(carDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate("/cars");
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCar();
  };
  return (
    <div className="edit-car-container">
      <h1 className="car-edit-header">Car Edit Form</h1>
      <form className="Form-Container" onSubmit={handleSubmit}>
        <label htmlFor="make">Make:</label>
        <input
          id="make"
          type="text"
          value={carDetails.make || ""}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="model">Model:</label>
        <input
          id="model"
          type="text"
          value={carDetails.model || ""}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="year">Year:</label>
        <input
          id="year"
          type="number"
          value={carDetails.year || ""}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="color">Color:</label>
        <input
          id="color"
          type="text"
          value={carDetails.color || ""}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={carDetails.price || ""}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Is Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          checked={carDetails.is_favorite || false}
          onChange={handleTextChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditCar;
