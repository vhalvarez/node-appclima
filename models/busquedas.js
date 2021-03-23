const axios = require('axios');

class Busquedas {
	historial = ['Tegucigalpa', 'Madrid', 'Caracas'];

	constructor() {
		// TODO: leer bd si existe
	}

	async ciudad(lugar = '') {
		try {
			//peticion http
			const resp = await axios.get(
				'https://api.mapbox.com/geocoding/v5/mapbox.places/cARACAS.json?access_token=pk.eyJ1IjoidmhhbHZhcmV6IiwiYSI6ImNrbW1iYTRhcDFkZjYyd3J3MTFndXVyYTUifQ.zc-k0IVILns7X7hiddl-OQ&cachebuster=1616522031166&autocomplete=true&limit=1&language=es'
			);

			console.log(resp.data);
			return []; // retornar los lugares que coincidan
		} catch (error) {
			return [];
		}
	}
}

module.exports = Busquedas;
