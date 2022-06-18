import { useEffect, useState } from 'react';
import './App.css';
import Box from './component/Box.js'
import WheatherButton from './component/WheatherButton.js'

// API 0011809c84cc5462f14bd1ec45e18ee4

function App() {

  
  const getCurrentLocation = () =>{
    // API 호출
  navigator.geolocation.getCurrentPosition((position)=>{
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    getWeather(lat , lon);
    
  });
  
   };

   const getWeather = async (lat, lon)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0011809c84cc5462f14bd1ec45e18ee4`
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);

    }
    
    useEffect(() => {
      getCurrentLocation()
    }, [])
    
    return (
      <div className="App">
        <Box></Box>
        <WheatherButton></WheatherButton>
      </div>
    );
  }



    
    
    

export default App;
