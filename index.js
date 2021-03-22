const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer.js');
const Busquedas = require('./models/busquedas.js');

const main = async () => {
	const busquedas = new Busquedas();
	let opt;

	do {
		opt = await inquirerMenu();

		switch (opt) {
			case 1:
				// Mostrar mensaje
				const lugar = await leerInput('Ciudad: ');
				console.log(lugar);

				// Buscar los lugares

				// Seleccionar el lugar

				// Clima

				// Mostrar resultados
				console.log('Informacion del lugar\n'.green);
				console.log('Ciudad: ');
				console.log('Lat: ');
				console.log('Lng: ');
				console.log('Temperatura: ');
				console.log('Minima: ');
				console.log('Maxima: ');
			break;
		}

		await pausa();
	} while (opt !== 0);
};

main();
