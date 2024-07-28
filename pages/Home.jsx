import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
function Home() {
  return (
    <div className="page-container">
      <div className="box">
        <h1 className="home-header">CAR COLLECTION</h1>
        <Link to={"/cars/"} className="push-to-start-btn">
          <div className="ring">
            <div className="inner-circle"></div>
            <div className="text">
              <span className="top">
                ENGINE <hr />
                Start
              </span>

              <div className="text">
                <span className="bottom">STOP</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
