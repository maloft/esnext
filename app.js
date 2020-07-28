//let
let favoriteCityId = "rome";

console.log(favoriteCityId);

favoriteCityId = "paris";

console.log(favoriteCityId);

//const

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];

console.log(citiesId);

//citiesId = [];
//console.log(citiesId); //Assignment to constant variable

citiesId.push("tokyo");

console.log(citiesId);

//Création d'objet

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;

    return { city, temperature };
}

const weather = getWeather(favoriteCityId);
console.log(weather);


//Affectation destructurée

let {
    city: city,

    temperature: temperature
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

    toString() {
        //return console.log("Trip " + "[" + this.id + ", " + this.name + ", " + this.imageUrl + "]");
        //return "Trip " + "["+ Object.values(this) + "]";
        return `Trip [${Object.values(this)}]`;
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
parisTrip._price = 100;

console.log(parisTrip);
console.log(parisTrip.name);

parisTrip.toString();

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());


// ##### Héritage #####
class FreeTrip extends Trip {

    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this.price = 0;
    }

    toString() {
        return `Free ${super.toString()}`;
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());


// Promise, Set, Map, Arrow Function
class TripService {
    constructor() {

        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                let triptoFind = null;
                this.trips.forEach(trip => {
                    if (trip.name == tripName) {
                        triptoFind = trip;
                    };
                });

                if (triptoFind != null) {
                    resolve(triptoFind);
                } else {
                    reject(`No trip with name ${tripName}`);
                }

            }, 2000)
        });
    }
}

class PriceService {
    constructor() {

        this.prixTrips = new Map();
        this.prixTrips.set('paris', 100);
        this.prixTrips.set('rio-de-janeiro', 800);
        this.prixTrips.set('nantes', null);

    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let priceToFind = null;

                this.prixTrips.forEach((value, key) => {
                    if (key == tripId) {
                        priceToFind = value;
                    };
                });

                if (priceToFind != null) {
                    resolve(`Price found : ${priceToFind}`);
                } else {
                    reject(`No Price for trip ${tripId}`);
                }

            }, 2000)
        });
    }
}



const tripService = new TripService();
tripService.findByName("Paris")
    .then(trip => console.log("Trip found : ", trip.toString()))
    .catch(err => console.log(err));

tripService.findByName("Clermont")
    .then(trip => console.log(trip))
    .catch(err => console.log(err));


const priceService = new PriceService();

tripService.findByName("Rio de Janeiro")
    .then(trip => priceService.findPriceByTripId(trip.id))
    .then(prix => console.log(prix))
    .catch(err => console.log(err));

tripService.findByName("Nantes")
    .then(trip => priceService.findPriceByTripId(trip.id))
    .then(prix => console.log(prix))
    .catch(err => console.log(err));


