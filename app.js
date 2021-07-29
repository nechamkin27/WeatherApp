const storage = new Storage();
const weatherStorage = storage.getStorageData();
console.log(weatherStorage.city + " "+ weatherStorage.country);
const weather = new Weather(weatherStorage.city, weatherStorage.country);
document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('w-change-btn').addEventListener('click',changeWeather);
const ui = new UI();
function getWeather() {

    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
    }
function changeWeather(){
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;

    weather.changeLocation(city,state);
    getWeather();
    storage.saveStorage(city,state);
    $('#locModal').modal('hide');
    const modal = document.getElementById('locModal');
   }