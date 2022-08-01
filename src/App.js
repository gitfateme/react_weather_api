import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import WeatherCard from "./WeatherCard";
import HumidityWind from "./HumidityWind";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      heroCity: "Garmsar",
      currentTemp: 25,
      heroIcon: "c02d",
      countryCode: "IR",
      description: "Few Clouds",
      humidity: 15,
      windSpeed: 2,
    };
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchInputChange(searchValue) {
    this.setState({ city: searchValue });
  }

  handleSearchSubmit() {
    let showTemperature = (r) => {
      console.log(r.data);
      this.setState({
        heroCity: r.data.data[0].city_name,
        currentTemp: Math.round(r.data.data[0].temp),
        heroIcon: r.data.data[0].weather.icon,
        countryCode: r.data.data[0].country_code,
        description: r.data.data[0].weather.description,
        humidity: Math.round(r.data.data[0].rh),
        windSpeed: Math.round(r.data.data[0].wind_spd),
      });
    };

    let apiKey = "0ec94f57e4c94d43a27eb573d1806275";
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
    return (
      <div className="App container ">
        <Header
          onSearchInputChange={this.handleSearchInputChange}
          onSearchInpuSubmit={this.handleSearchSubmit}
          country={countryCode}
          city={heroCity}
        />
        <Hero
          city={heroCity}
          temp={currentTemp}
          icon={heroIcon}
          weatherDescription={description}
        />
        <div className="col-lg-8 offset-lg-2 p-0">
          <div className="row">
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
          </div>
        </div>
        <HumidityWind humidity={humidity} wind={windSpeed} />
        <Footer />
      </div>
    );
  }
}

export default App;
