import React from 'react';
import Header from './Header';
import Hero from './Hero';
import WeatherCard from './WeatherCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faLocationDot } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App container ">
      <Header />
      <Hero />
      <div className="container col-lg-8 offset-lg-2 p-0">
        <div className="row">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />

        </div>
      </div>
    </div>
  );
}

export default App;
