const axios = require('axios');

const city = require('./place/place.js');
const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Direction of a city for obtain the weather',
        demand: true
    }
}).argv;

//let result = axios.get('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=60ee4a1757916dff0b454fe2c44e3516')
//console.log(result);


let getInfo = async(direction) => {

    try {
        let coors = await city.getPlaceLatLng(direction);
        let temp = await city.getPlaceWeather(coors.lat, coors.lng);

        return `The weather in ${coors.direction} is ${temp.temp}`;

    } catch (e) {
        return `cant determinate the weather in ${direction}`;
    }
}



getInfo(argv.direction)
    .then(res => console.log(res))
    .catch(e => console.log(e));
/*
city.getPlaceLatLng(argv.direction)
    .then(res => {
        console.log(res);
        city.getPlaceWeather(res.lat, res.lng)
            .then(res2 => {
                console.log(res2);
            })
            .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
    */