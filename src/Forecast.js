import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Forecast.css";
import axios from "axios";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: [],
    };
    this.getForecast = this.getForecast.bind(this);
    this.getTimestampDay = this.getTimestampDay.bind(this);
  }

  componentDidMount() {
    this.getForecast();
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.getForecast();
    }
  }

  getTimestampDay(ts) {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = new Date(ts * 1000).getDay();
    return days[day];
  }

  getForecast() {
    let handleResponse = (r) => {
      // console.log(r.data);
      this.setState({
        forecast: r.data.data,
      });
    };
    let apiKey = "6e7339bdf9d54b76b9840631d50489b2";
    let apiUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${this.props.city}&key=${apiKey}&days=8`;
    axios.get(apiUrl).then(handleResponse);
  }

  render() {
    return (
      <div className="col-lg-8 offset-lg-2 p-0 Forecast">
        <ul className="row list-unstyled p-0">
          {this.state.forecast.map((day, index) => {
            return (
              <li
                key={index}
                className="col-6 col-md-3  text-center py-3 weather-card"
              >
                <div className="bg-light pt-4">
                  {this.getTimestampDay(day.ts)}
                </div>
                <div className="bg-light pt-4">Wed</div>

                <div className="bg-light">
                  <span className="text-danger">
                    {Math.round(day.app_max_temp)}
                  </span>{" "}
                  <span className="text-primary">
                    {Math.round(day.app_min_temp)}
                  </span>
                </div>
                <div className="bg-light pb-4">
                  <img
                    src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`}
                    alt={day.weather.description}
                    className="w-25 mt-3"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Forecast;
