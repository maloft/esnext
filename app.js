//let
let favoriteCityId = "rome";

console.log(favoriteCityId);

favoriteCityId = "paris";

console.log(favoriteCityId);

//const

const citiesId = ["paris","nyc","rome","rio-de-janeiro"];

console.log(citiesId);

//citiesId = [];
//console.log(citiesId); //Assignment to constant variable

citiesId.push("tokyo");

console.log(citiesId);

//Création d'objet

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    
    return { city, temperature};
    }

const weather = getWeather(favoriteCityId); 
console.log(weather);


//Affectation destructurée

let {
    city : city,

    temperature : temperature
} = weather;

console.log(city);
console.log(temperature);

//Rest operator





