require('dotenv').config();

const {
	leerInput,
	inquirerMenu,
	pausa,
	listarLugares,
} = require('./helpers/inquirer.js');
const Busquedas = require('./models/busquedas.js');

const main = async () => {
	const busquedas = new Busquedas();
	let opt;

	do {
		opt = await inquirerMenu();

		switch (opt) {
			case 1:
				// Mostrar mensaje
				const termino = await leerInput('Ciudad: ');
				// Buscar los lugares
				const lugares = await busquedas.ciudad(termino);
				//  Seleccionar lugar
				const id = await listarLugares(lugares);
				const lugarSel = lugares.find((l) => l.id === id);

				// Clima

				// Mostrar resultados
				console.log('Informacion del lugar\n'.green);
				console.log('Ciudad: ', lugarSel.nombre);
				console.log('Lat: ', lugarSel.lat);
				console.log('Lng: ', lugarSel.lng);
				console.log('Temperatura: ');
				console.log('Minima: ');
				console.log('Maxima: ');
				break;
		}

		await pausa();
	} while (opt !== 0);
};

main();
