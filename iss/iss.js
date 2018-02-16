// var axios = require("axios")
// let issUrl = 'http://api.open-notify.org/iss-now.json';
//
// function moveISS () {
// axios.get(issUrl).then((response) => {
//     console.log(response);
//     console.log(`Status of request: ${response.data.message} – ${response.status} ${response.statusText}`);
//     console.log(`Latitude: ${response.data.iss_position.latitude}`);
//     console.log(`Longitude: ${response.data.iss_position.longitude}`);
// }).catch((error) => {
//     console.log(error);
// });
// setTimeout(moveISS, 5000);
// }
let mymap = L.map('mapid').setView([51.505, -0.09], 13);
