import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/HumidityWind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";

function HumidityWind(props) {
  return (
    <div className="row HumidityWind ">
      <div className="col-lg-8 offset-lg-2 text-center p-0">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="text-start row bg-light m-3">
              <div className="col-2 align-self-center ps-3 humidity-wind-icon">
                <FontAwesomeIcon icon={faDroplet} />
              </div>
              <div className="col-10  p-4 ps-5 humidity-wind-text">
                <span className="d-block text-number">{props.humidity}%</span>
                <span>Humidity</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-start row m-3 bg-light">
              <div className="col-2 align-self-center ps-3 humidity-wind-icon">
                <FontAwesomeIcon icon={faWind} />
              </div>
              <div className="col-10  p-4  ps-5 humidity-wind-text">
                <span className="d-block text-number">{props.wind} m/s</span>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HumidityWind;
