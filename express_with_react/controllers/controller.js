import {v4 as uuid} from 'uuid'
import fs from 'fs'
import {dirname} from 'path'
import axios from 'axios'

let weatherParse = JSON.parse(
  fs.readFileSync('./db/weather.json')
)

export const getWeather = (req, res) => {
    res.send(weatherData)
}
