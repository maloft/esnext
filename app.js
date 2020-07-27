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
let [parisId, nycId, ...otherCitiesId] = citiesId;
console.log(parisId); 
console.log(nycId);
console.log(otherCitiesId.length);

//Classe
class Trip {
    constructor(id, name, imageUrl) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    }

    get price() {
        return this._price;
    }

    set price(_price) {
        this._price = _price
    }

    toString(){
        console.log("Trip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this._price + "]");
    }

    }

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
parisTrip._price = 100;

console.log(parisTrip);
console.log(parisTrip.name);

parisTrip.toString();



