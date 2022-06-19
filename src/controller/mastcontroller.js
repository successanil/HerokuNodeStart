const axios = require('axios');

const appConstants = require('../config/AppConstants')

exports.welcomeMessage = (req, res) => {
    res.send('Welcome to Node App')
}

exports.getWeatherDataList = (req, res) => {

    var cityList = []
    cityList.push({ cityName: 'dehradun' })
    cityList.push({ cityName: 'new delhi' })
    cityList.push({ cityName: 'hyderabad' })
    cityList.push({ cityName: 'chennai' })
    cityList.push({ cityName: 'mumbai' })
    cityList.push({ cityName: 'mangalore' })
    cityList.push({ cityName: 'dispur' })
    cityList.push({ cityName: 'indore' })

    res.status(200).send(cityList)

}

exports.fetchTempretureForCity = (req, res) => {
    var cityName = req.query.cityName
    if (cityName != null && cityName !== '') {
        console.log(cityName);
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + "&appid=" + appConstants.WEATHER_API_KEY)
            .then(function (response) {
                res.status(200).send(response.data);
            })
            .catch(function (error) {
                console.log(error);
                res.status(404).send(error.message);
            })
    } else {
        res.status(404).send('City Name is missing');
    }

}