import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/WeatherCard.css";

function WeatherCard() {
  return (
    <div className="col-6 col-md-3  text-center py-3 weather-card">
      <div className="bg-light pt-4">Mon</div>
      <div className="bg-light">30° 19°</div>
      <div className="bg-light pb-4">
        <img src="http://openweathermap.org/img/wn/10d.png" alt="Weather" />
      </div>
    </div>
  );
}

export default WeatherCard;
