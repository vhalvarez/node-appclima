
const { leerInput } = require('./helpers/inquirer.js')

const main = async (params) => {
    const text = await leerInput('Hola ')

    console.log(text);
};

main()
