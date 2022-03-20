const { app, BrowserWindow } = require('electron')
//import fetch from 'electron-fetch'
//import fetch from "node-fetch";
//const {fetch} = require('whatwg-fetch')
const fetch = require('electron-fetch').default

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
}


app.whenReady().then(() => {
    createWindow()
    //console.log("let weather")
})

let weather = {
    "apiKey":"df623357fb1e0d5bf4a681eb67ab0830",
    //https://api.openweathermap.org/data/2.5/weather?q=London&appid=df623357fb1e0d5bf4a681eb67ab0830
    fetchWeather: function () {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=London&appid=df623357fb1e0d5bf4a681eb67ab0830"
        ).then((response) => response.json())
        .then((data) => console.log(data))
    },
}

weather.fetchWeather();