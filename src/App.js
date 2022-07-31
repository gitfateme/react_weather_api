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
      heroCity: "London",
    };
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchInputChange(searchValue) {
    this.setState({ city: searchValue });
  }

  handleSearchSubmit(city) {
    let showTemperature = (r) => {
      console.log(r.data);
      this.setState({ heroCity: r.data.name });
    };

    console.log(city);
    let apiKey = "20c9277c0c1a5b967be7ce712a171f19";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  render() {
    const heroCity = this.state.heroCity;
    return (
      <div className="App container ">
        <Header
          onSearchInputChange={this.handleSearchInputChange}
          onSearchInpuSubmit={this.handleSearchSubmit}
        />
        <Hero city={heroCity} />
        <div className="col-lg-8 offset-lg-2 p-0">
          <div className="row">
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
          </div>
        </div>
        <HumidityWind />
        <Footer />
      </div>
    );
  }
}

export default App;
