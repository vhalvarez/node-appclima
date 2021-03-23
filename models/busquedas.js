const axios = require('axios');

class Busquedas {
	historial = ['Tegucigalpa', 'Madrid', 'Caracas'];

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
}

module.exports = Busquedas;
