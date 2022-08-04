import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Forecast from "./Forecast";
import HumidityWind from "./HumidityWind";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      date: "",
      city: "tokyo",
      heroCity: "",
      currentTemp: null,
      heroIcon: "",
      countryCode: "",
      description: "",
      humidity: null,
      windSpeed: null,
      forecastCity: "tokyo",
    };
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }
  componentDidMount() {
    this.handleSearchSubmit();
  }

  handleSearchInputChange(searchValue) {
    if (searchValue === "karaj") {
      this.setState({ city: "krj" });
    } else {
      this.setState({ city: searchValue });
    }
  }

  showDate() {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let now = new Date();
    let year = now.getFullYear();
    let month = months[now.getMonth()];
    let day = now.getDay();
    let weekDay = days[now.getDay()];
    function getHour() {
      let newHour = now.getHours();
      if (newHour < 10) {
        newHour = `0${newHour}`;
      }
      return newHour;
    }
    function getMinute() {
      let newMin = now.getMinutes();
      if (newMin < 10) {
        newMin = `0${newMin}`;
      }
      return newMin;
    }

    return `${weekDay}, ${day} ${month}, ${year}, ${getHour()}:${getMinute()}`;
  }

  handleSearchSubmit() {
    let showTemperature = (r) => {
      this.setState({
        loading: false,
        heroCity: r.data.data[0].city_name,
        currentTemp: Math.round(r.data.data[0].temp),
        heroIcon: r.data.data[0].weather.icon,
        countryCode: r.data.data[0].country_code,
        description: r.data.data[0].weather.description,
        humidity: Math.round(r.data.data[0].rh),
        windSpeed: Math.round(r.data.data[0].wind_spd),
        date: this.showDate(),
        forecastCity: r.data.data[0].city_name,
      });
      console.log(r.data);
    };
    let apiKey = "6e7339bdf9d54b76b9840631d50489b2";
    let apiUrl = `https://api.weatherbit.io/v2.0/current?city=${this.state.city}&key=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
  }

  render() {
    const heroCity = this.state.heroCity;
    const currentTemp = this.state.currentTemp;
    const heroIcon = this.state.heroIcon;
    const countryCode = this.state.countryCode;
    const description = this.state.description;
    const humidity = this.state.humidity;
    const windSpeed = this.state.windSpeed;
    const loading = this.state.loading;
    const date = this.state.date;
    const forecastCity = this.state.forecastCity;
    return (
      <div className="App container ">
        <Header
          onSearchInputChange={this.handleSearchInputChange}
          onSearchInpuSubmit={this.handleSearchSubmit}
          country={countryCode}
          city={heroCity}
          loading={loading}
        />
        <Hero
          city={heroCity}
          temp={currentTemp}
          icon={heroIcon}
          weatherDescription={description}
          loading={loading}
          date={date}
        />
        <Forecast city={forecastCity} />
        <HumidityWind humidity={humidity} wind={windSpeed} />
        <Footer />
      </div>
    );
  }
}

export default App;
