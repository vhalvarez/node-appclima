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
				if (id === 0) continue;

				const lugarSel = lugares.find((l) => l.id === id);

				busquedas.agregarHistorial(lugarSel.nombre);

				// Clima
				const clima = await busquedas.climaLugar(
					lugarSel.lat,
					lugarSel.lng
				);

				// Mostrar resultados
				console.log('Informacion del lugar\n'.green);
				console.log('Ciudad: ', lugarSel.nombre);
				console.log('Lat: ', lugarSel.lat);
				console.log('Lng: ', lugarSel.lng);
				console.log('Temperatura: ', clima.temp);
				console.log('Minima: ', clima.min);
				console.log('Maxima: ', clima.max);
				console.log('Descripcion: ', clima.desc);
				break;

			case 2:
				busquedas.historial.forEach((lugar, i) => {
					const idx = `${i + 1}`.green;
					console.log(`${idx}. ${lugar}`);
				});
				break;
		}

		await pausa();
	} while (opt !== 0);
};

main();
