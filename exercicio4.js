/*
    4. Escreva um script que apresenta as seguintes operações para o usuário:
        1 - Soma
        2 - Substração
        3 - Multiplicação
        4 - Divisão
        5 - Sair
    O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
    inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use o objeto 
    JSON do exercício 4 para realizar as operações aritméticas.
*/
const entrada = require('prompt-sync') ({sigint: true});

const operacoes = {
    somar: (n1, n2) => n1 + n2,
    subtrair: (n1, n2) => n1 - n2,
    multiplicar: (n1, n2) => n1 * n2,
    dividir: (n1, n2) => n1 / n2
}

 calculadora = () => {
    var op, n1, n2;

    do{
        n1 = parseInt(entrada("Digite o primeiro valor? "));
        n2 = parseInt(entrada("Digite o segundo valor? "));

        console.log("------------MENU------------");
        console.log("1 - SOMA");
        console.log("2 - SUBTRAÇÃO");
        console.log("3 - MULTIPLICAÇÃO");
        console.log("4 - DIVISÃO");
        console.log("5 - SAIR");
        console.log("----------------------------");

        op = parseInt(entrada("Qual operação deseja realizar? "));
    
       switch (op) {
            case 1:
                console.log(`Soma dos números = ${operacoes.somar(n1, n2)}`);
            break;
            case 2:
                console.log(`Subtração dos números = ${operacoes.subtrair(n1, n2)}`);
            break;
            case 3:
                console.log(`Multiplicação dos números = ${operacoes.multiplicar(n1, n2)}`);
            break;
            case 4:
                console.log(`Divisão dos números = ${operacoes.dividir(n1, n2)}`);
            break;
            case 5:
                console.log("Até breve");
            break
            default:
                console.log("Operação inválida, tente novamente...");
        }
    
    } while (op !== 5);
}

calculadora();