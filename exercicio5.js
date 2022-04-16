/*
    5. Faça um programa que, utilizando promises e as funções then/catch, exibe a temperatura
    atual (atributo chamado temp). O programa deve ser um loop que exibe as seguintes opções para o usuário:
        1 - Digitar latitude e longitude
        2 - Sair
    O programa fica em loop até que o usuário digite 2. Ao digitar 1, o usuário deve informar
    os valores de latitude da localização da qual deseja saber a temperatura atual. Use um 
    arquivo .env e o pacote dotenv para configurar uma variável de ambiente que indica qual 
    unidade de medida de temperatura deve ser utilizada: Kelvin, Fahrenheit ou Celsius. 
    Lembre-se de armazenar a chave de API no arquivo .env e de tomar o cuidado de não armazená-lo 
    no sistema de controle de versão.
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

const temperatura = (lat, lon) => {
  return new  Promise((resolve, reject) => {
    const url = `${PROTOCOL}://${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${UNITS}&lang=${LANG}`;
    resolve(axios.get(url));
  })
}

const main = () => {
  var op;
  do {

    console.log("------------MENU------------");
    console.log("1 - Digitar latitude e longitude");
    console.log("2 - Sair");
    console.log("----------------------------");
    
    op = parseInt(prompt("Digite a opção desejada: "));

    switch (op) {
      case 1:
        let lat = parseInt(prompt("Digite a latitude: " ));
        let lon = parseInt(prompt("Digite a longitude: " ));
        temperatura(lat, lon)
        .then(res => 
          console.log(`\nTemperatura: ${res.data.main.temp}°C`))
        .catch(err => console.log(err));
      break;
      case 2:
        console.log("Até breve");
      break;
      default:
        console.log("Operação inválida, tente novamente...");
      }

  }while(op !== 2);
};

main();