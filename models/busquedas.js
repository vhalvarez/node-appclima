const axios = require('axios');

class Busquedas {
	historial = ['Tegucigalpa', 'Madrid', 'Caracas'];

	constructor() {
		// TODO: leer bd si existe
	}

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'languaje': 'es'
        }
    }

	async ciudad(lugar = '') {
		try {
			//peticion http
            const intance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            })

            const resp = await intance.get()

			console.log(resp.data);
			return []; // retornar los lugares que coincidan
		} catch (error) {
			return [];
		}
	}
}

module.exports = Busquedas;
