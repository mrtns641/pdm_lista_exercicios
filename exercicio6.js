/*
    6. Refaça o exercício 5 usando a construção async/await
*/
const prompt = require('prompt-sync')({sigint: true});
const axios = require('axios');
require('dotenv').config();

const {
    PROTOCOL,
    BASE_URL,
    API_KEY,
    UNITS,
    LANG
} = process.env;

const main = async () => {
    var op;
    do {

        console.log("------------MENU------------");
        console.log("1 - Digitar latitude e longitude");
        console.log("2 - Sair");
        console.log("----------------------------");

        op = parseInt(prompt("Digite a opção desejada: "));
        
        switch(op) {
            case 1:
                let lat = parseInt(prompt("Digite a latitude: "));
                let lon = parseInt(prompt("Digite a longitude: "));
                const url = await axios.get(`${PROTOCOL}://${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${UNITS}$lang=${LANG}`)
                console.log(`\nTemperatura: ${url.data.main.temp}°C`)
            break;
            case 2:
                console.log("Até breve");
            break;
            default:
                console.log("Operação inválida, tente novamente...")
        }

    }while(op !== 2)
};

main()