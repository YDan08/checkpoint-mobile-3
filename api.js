import axios from "axios"

export const api = axios.create({
  baseURL: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly",
  headers: {
    "X-RapidAPI-Key": "98d9826aeamsh476241fd457b346p18bb42jsn2a0ea3316eeb",
    "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
  },
})
