const axios = require('axios');


const getPlaceLatLng = async(direction) => {

    let encodedUrl = encodeURI(direction);
    let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    if (result.data.status === 'ZERO_RESULTS') {
        throw new Error(`there are no results for the city ${direction}`);
    }


    return {
        direction: result.data.results[0].formatted_address,
        lat: result.data.results[0].geometry.location.lat,
        lng: result.data.results[0].geometry.location.lng
    }
}


const getPlaceWeather = async(lat, lng) => {

    // let encodedUrl = encodeURI(direction);
    let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=60ee4a1757916dff0b454fe2c44e3516`)


    if (result.data.status === 'ZERO_RESULTS') {
        throw new Error(`there are no results for the coordinates`);
    }


    return {
        temp: result.data.main.temp
            // lat: result.data.results[0].geometry.location.lat,
            // lng: result.data.results[0].geometry.location.lng
    }
}

module.exports = {
    getPlaceLatLng,
    getPlaceWeather
}