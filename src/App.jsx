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
import Cars_img from "../Data/Cars_img";
import Card from"../Components/Card";
import Avatar from "../Components/Avatar";

function createCard(car){
  return( <Card
  id={car.id}
  key={car.id}
  img_URL={car.img_URL}
  make={car.make}
  model={car.model}
  year={car.year}
  color={car.color}
  price={car.price}
  is_Favorite={car.is_Favorite}/>
);


}

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Index />} />
            <Route path="/cars/:id" element={<Show />} />
            <Route path="/cars/:id/edit" element={<EditCar />} />
            <Route path="/cars/New" element={<New />} />
            <Route path="*" element={<FourOrFour />} />
          </Routes>
        </main>
      </Router>

      <div>
        <h1 className="heading" style="text-align: center">My Cars</h1>
        {
        cars.map(createCard)}
        </div>

    </div>

    

  );
}

export default App;
// changes in App.jsx
