const prompt = require("prompt-sync")();
const axios = require("axios");
//chave
const apiKey = "f309778b83bcd95db252a818ee7a9294";
//cidade
const q = prompt('Escreva uma cidade: ');

const units = "metric";
//idioma
const lang = "pt_BR";
//quantidade de resultados
const cnt = "1";
const url = `http://api.openweathermap.org/geo/1.0/direct?q=${q}&appid=${apiKey}&units=metric&lang=pt_br`;


axios.get(url).then((res) => {
    return res.data;
}).then((res) => {
    lat = res[0].lat;
    lon = res[0].lon;

    const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`;
    axios.get(urlCurrent).then((res) => {
        return res.data;
    }).then((res) => {
        feels_like = res.main.feels_like
        umidade = res.main.humidity
        description = res.weather[0].description
        vento = res.wind.speed
        tempmax = res.main.temp_max
        tempmin = res.main.temp_min

        console.log(`Latitude: ${lat} e longitude: ${lon}`)
        console.log(`Sensação térmica: ${feels_like}°.
Descrição: ${description}.`)
        console.log(`Umidade: ${umidade}%`)
        console.log(`Temperatura máxima: ${tempmax}ºC`)
        console.log(`Temperatura mínima: ${tempmin}ºC`)
        console.log(`Velocidade do vento: ${vento}m/s`)
        
    });
});