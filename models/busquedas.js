const axios = require('axios');

class Busquedas {
	historial = [];

	constructor() {
		// TODO: leer bd si existe
	}

	get paramsMapbox() {
		return {
			access_token: process.env.MAPBOX_KEY,
			limit: 5,
			languaje: 'es',
		};
	}


	async ciudad(lugar = '') {
		try {
			//peticion http
			const intance = axios.create({
				baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
				params: this.paramsMapbox,
			});

			const resp = await intance.get();

			return resp.data.features.map((f) => ({
				id: f.id,
				nombre: f.place_name,
                lng: f.center[0],
                lat: f.center[1]
			}));
		} catch (error) {
			return [];
		}
	}

	async climaLugar (lat = '', lon = '') {
		try {
			
			//intance axios
			const intance = axios.create({
				baseURL: `https://api.openweathermap.org/data/2.5/weather`,
				params: {
					appid: process.env.OPENWEATHER_KEY,
					lat: lat,
					lon: lon,
					lang: 'es'
				}
			});
			//respuesta

			const resp = await intance.get();


			return {
				desc: resp.data.weather[0].description,
				min: resp.data.main.temp_min,
				max: resp.data.main.temp_max,
				temp: resp.data.main.temp
			}

		} catch (error) {
			console.log(error);
		}
	}

	agregarHistorial (lugar = ''){
		this.historial.unshift( lugar )

	}
}

module.exports = Busquedas;
