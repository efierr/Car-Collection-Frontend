import React from "react";
const API = import.meta.env.VITE_API_URL;
import "../css/CarDetails.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function CarDetails() {
  const [carsDetails, setCarsDetails] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    price: 0,
    is_favorite: false,
    img_url: "",
  });
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/cars/${id}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resJSON) => {
        console.log(resJSON);
        setCarsDetails(resJSON);
      })
      .catch((error) => console.error(error));
  }, [id, navigate]);

  const handleDelete = () => {
    fetch(`${API}/cars/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        navigate("/cars");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="car-details-page-container">
      <div className="box">
        <h1 className="car-details-header">Car Details</h1>
        <img
          className="car-detail-image"
          src={carsDetails.img_url}
          alt={carsDetails.make}
        />
        <p>Make:{carsDetails.make}</p>
        <p>Model:{carsDetails.model}</p>
        <p>Year:{carsDetails.year}</p>
        <p>Color:{carsDetails.color}</p>
        <p>Price: ${carsDetails.price}</p>
        <p>{carsDetails.is_favorite}</p>
        <div className="button-box">
          <Link to={`/cars/${id}/edit`}>
            <button id="edit-delete-button">Edit</button>
          </Link>
          <button onClick={handleDelete} id="edit-delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
