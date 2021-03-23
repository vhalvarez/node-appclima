const axios = require('axios');

class Busquedas {
	historial = ['Tegucigalpa', 'Madrid', 'Caracas'];

	constructor() {
		// TODO: leer bd si existe
	}

	async ciudad(lugar = '') {
		try {
			//peticion http
			const resp = axios.get();

			return []; // retornar los lugares que coincidan
		} catch (error) {
			return [];
		}
	}
}

module.exports = Busquedas;
