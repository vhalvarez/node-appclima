const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer.js');

const main = async () => {
	let opt;

	do {
		opt = await inquirerMenu();

		console.log({ opt });

		await pausa();
	} while (opt !== 0);
};

main();
