import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Hero.css";

function Hero(props) {
  return (
    <div className="row Hero">
      <div className="col-lg-8 offset-lg-2 border hero-background text-center p-5 ">
        <p>Saturday, 25 July, 2022, 15:24</p>
        <h2>{props.temp}°C</h2>
        <div className="d-flex  align-items-center justify-content-center">
          <img
            src={`https://www.weatherbit.io/static/img/icons/${props.icon}.png`}
            alt="Weather"
          />
          <h3>{props.weatherDescription}</h3>
        </div>
        <h1 className="pt-3">{props.city}</h1>
      </div>
    </div>
  );
}

export default Hero;
