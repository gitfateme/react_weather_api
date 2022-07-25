import React from 'react';
import Header from './Header';
import Hero from './Hero';
import WeatherCard from './WeatherCard';
import HumidityWind from './HumidityWind';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <div className="App container ">
      <Header />
      <Hero />
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

export default App;
