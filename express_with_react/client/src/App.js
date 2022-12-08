//https://goweather.herokuapp.com/weather/{city}

import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState({})
  const [city, setCity] = useState('')
  const [input, setInput] = useState('')

  useEffect(()=>{
    const getWeather = async()=> {
      const {data} = await axios.get(url)
      setWeather(data)
    }
    getWeather()
  },[city])



  return (
    <div className="App">
    <label>Enter City</label>
    <input type={'text'} value={input} onChange={(e)=>{setInput(e.target.value)}} />
    </div>
  );
}

export default App;
