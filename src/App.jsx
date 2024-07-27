import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Edit from "../pages/Edit";
import FourOrFour from "../pages/FourOrFour";
import Home from "../pages/Home";
import Index from "../pages/Index";
import Show from "../pages/Show";
import New from "../pages/New";
import NavBar from "../Components/NavBar";
import EditCar from "../Components/EditCar";
import NewCar from "../Components/NewCar";
import Cars_img from "../Data/Cars_img.js";

function createCard(car){
  return( <Card
  key={car.id}
  Img_URL={car.Img_URL}
  Make={car.Make}
  Model={car.Model}
  Year={car.Year}
  Color={car.Color}
  Price={car.Price}
  Is_Favorite={car.Is_Favorite}/>
);


}

function App() {
  console.log(Cars_img);
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/cars" element={<Index />} />
            <Route path="/cars/:id" element={<Show />} />
            <Route path="/cars/:id/edit" element={<EditCar />} />
            <Route path="/cars/New" element={<New />} />
          </Routes>
        </main>
      </Router>
    </div>
    <div>
      <h1 className="heading">My Cars</h1>
      <div className="card">
        <div className="top">
          <img
          className="circle-img"
          src="https://media.ed.edmunds-media.com/tesla/model-y/2024/oem/2024_tesla_model-y_4dr-suv_performance_fq_oem_1_815.jpg"
          alt="avatar_img"
          />
          </div>

    <div className="bottom">
      <p className="info">Make</p>
      <p className="info">Model</p>
      <p className="info">Year</p>
      <p className="info">Color</p>
      <p className="info">Price</p>
      <p className="info">Is_Favorite</p>
    </div>
    </div>

  );
}

export default App;
// changes in App.jsx
