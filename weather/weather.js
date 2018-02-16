const axios = require('axios');

const secrets = require('../secrets');

function checkWeather() {
	let encodedAddress = encodeURIComponent(`${secrets.address.street} ${secrets.address.doorNumber}, ${secrets.address.zip} ${secrets.address.city}`);

	let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

	axios.get(geocodeUrl).then((response) => {
		if (response.data.status === 'ZERO_RESULTS') {
			throw new Error('Unable to find that address.');
		}

		let latitude = response.data.results[0].geometry.location.lat;
		let longitude = response.data.results[0].geometry.location.lng;

		let weatherUrl = `https://api.darksky.net/forecast/${secrets.darkSkyAPIKey}/${latitude},${longitude}?lang=de&units=auto`;

		console.log(response.data.results[0].formatted_address);
		return axios.get(weatherUrl);

	}).then((response) => {
		let temperature = response.data.currently.temperature;
		let apparentTemperature = response.data.currently.apparentTemperature;

		console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`)

	}).catch((error) => {
		if (error.code === 'ENOTFOUND') {
			console.log('Unable to connect to API server');
		} else {
			console.log(error.message);
		}
	});

	setTimeout(() => {
		checkWeather();
	}, 600000);
}

module.exports.weather = checkWeather;
