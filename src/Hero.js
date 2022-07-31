import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Hero.css";

function Hero() {
  return (
    <div className="row Hero">
      <div className="col-lg-8 offset-lg-2 border hero-background text-center p-5 ">
        <p>Saturday, 25 July, 2022, 15:24</p>
        <h2>30°C</h2>
        <div className="d-flex  align-items-center justify-content-center">
          <img
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="Weather"
          />
          <h3>Few Clouds</h3>
        </div>
        <h1 className="pt-3">London</h1>
      </div>
    </div>
  );
}

export default Hero;
