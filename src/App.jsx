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

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/cars" element={<Index />} />
            <Route path="/cars/:id" element={<Show />} />
            <Route path="/cars/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOrFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
// changes in App.jsx
