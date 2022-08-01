import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Hero.css";
import { TailSpin } from "react-loader-spinner";

function Hero(props) {
  if (props.loading) {
    return (
      <div className="row Hero">
        <div className="col-lg-8 offset-lg-2 border hero-background  p-5 ">
          <div className="d-flex justify-content-center">
            <TailSpin color="#fff" height={200} width={80} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row Hero">
        <div className="col-lg-8 offset-lg-2 border hero-background text-center p-5 ">
          <p>{props.date}</p>
          <h2>{props.temp}°C</h2>
          <div className="d-flex  align-items-center justify-content-center">
            <img
              src={`https://www.weatherbit.io/static/img/icons/${props.icon}.png`}
              alt={props.weatherDescription}
            />
            <h3 className="text-capitalize">{props.weatherDescription}</h3>
          </div>
          <h1 className="pt-3">{props.city}</h1>
        </div>
      </div>
    );
  }
}

export default Hero;
