const prompt = require("prompt-sync")();

//01
// let temperaturaCelsius = parseInt(prompt('Informe a temperatura em graus Celsius: '));

// let temperaturaFah = temperaturaCelsius * 1.8 + 32;

// console.log('A temperatura em Fahrenheit é:' + temperaturaFah);

//----------------------------------------------------------------

//02
// let qtdEleitores = parseInt(prompt('Informe a quantidade de Eleitores: '));
// let qtdVotosBrancos = parseInt(prompt('Informe a quantidade de votos brancos: '));
// let qtdVotosNulos = parseInt(prompt('Informe a quantidade de votos nulos: '));
// let qtdVotosValidos = parseInt(prompt('Informe a quantidade de votos validos: '));

// let pctVotosBrancos = (qtdVotosBrancos / qtdEleitores) * 100 ;
// let pctVotosNulos = (qtdVotosNulos / qtdEleitores) * 100 ;
// let pctVotosValidos = (qtdVotosValidos / qtdEleitores) * 100 ;

// console.log(pctVotosBrancos + ' (percentual de votos brancos)')
// console.log(pctVotosNulos + ' (percentual de votos nulos)')
// console.log(pctVotosValidos + ' (percentual de votos válidos)')

//----------------------------------------------------------------

//03
// let num1 = parseInt(prompt('Informe o primeiro numero: '));
// let num2 = parseInt(prompt('Informe o segundo numero: '));
// let num3 = parseInt(prompt('Informe o terceiro numero: '));
// let num4 = parseInt(prompt('Informe o quarto numero: '));

// let calc1 = num1 + 25;
// let calc2 = num2 * 3;
// let calc3 = ( 12 * num3)/100;
// let calc4 = num1 + num2 + num3;

//----------------------------------------------------------------

//04 e 05
// let nota = parseInt(prompt('Informe sua nota: '));

// if(nota>=6){
//     console.log('PARABENS voçê foi aprovado!');
// }else{
//     console.log('Voçê foi REPROVADO! Estude mais.');
// }

//----------------------------------------------------------------

//06
// let lado1 = parseInt(prompt('Insira o comprimento do lado A: '));
// let lado2 = parseInt(prompt('Insira o comprimento do lado B: '));
// let lado3 = parseInt(prompt('Insira o comprimento do lado C: '));

// if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
//     if ( lado1 == lado2 && lado2 == lado3){
//         console.log('O triangulo é equilatero');
//     }else if( lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
//         console.log('O triangulo é um escaleno');
//     }else if ( lado1 == lado2 || lado1 == lado3 || lado2 == lado3 ){
//         console.log('O triangulo é um isósceles');
//     }
// }else {
//     console.log('Não é possivel formar um triangulo');
// };

//----------------------------------------------------------------

//07
// let qtdMaca = parseInt(prompt("Informe a quantidade de maças: "));
// let precoTotal = 0;
// if (qtdMaca >= 12) {
//   precoTotal = qtdMaca * 0.25;
// } else {
//   precoTotal = qtdMaca * 0.3;
// }
// console.log("Total a pargar é: R$" + precoTotal);

//----------------------------------------------------------------

//08
// let num1 = parseInt(prompt("Informe o primeiro numero: "));
// let num2 = parseInt(prompt("Informe o segundo numero: "));

// if(num1> num2){
//     console.log(num2, num1);
// }else{
//     console.log(num1, num2);
// }

//----------------------------------------------------------------

//09
// let codigoOrigem = parseInt(prompt("Informe o codigo de origem do produto: "));

// switch (codigoOrigem) {
//   case 1:
//     console.log("Sul");
//     break;
//   case 2:
//     console.log("Norte");
//     break;
//   case 3:
//     console.log("Leste");
//     break;
//   case 4:
//     console.log("Oeste");
//     break;
//   case (5, 6):
//     console.log("Nordeste");
//     break;
//   case (7, 8, 9):
//     console.log("Sudeste");
//     break;
//   default:
//     if (codigoOrigem >= 10 && codigoOrigem <= 20) {
//       console.log("Centro-Oeste");
//       break;
//     } else if (codigoOrigem >= 25 && codigoOrigem <= 50) {
//       console.log("Noroeste");
//       break;
//     } else {
//       console.log("Produto Importado");
//     }
// }

//----------------------------------------------------------------

//10
// let num = parseInt(prompt('Informe um numero '));
// for (let i = 0; i < 10; i++){
//     console.log(num);
// }

//----------------------------------------------------------------

//11
// let numero = parseInt(prompt("Informe um numero: "));

// if (numero < 0 || numero == NaN) {
//   return;
// } else if (numero % 2 == 0) {
//   console.log("PAR");
// } else if (numero % 2 == 1) {
//   console.log("IMPAR");
// }

//----------------------------------------------------------------

//12
// for (let i = 1000; i < 2000; i++) {
//     if(i % 11 == 5){
//         console.log(i);
//     }
// }

//----------------------------------------------------------------

//13
// let num1 = parseInt(prompt("Informe o primeiro numero: "));
// let num2 = parseInt(prompt("Informe o segundo numero: "));
// let num3 = parseInt(prompt("Informe o terceiro numero: "));
// let num4 = parseInt(prompt("Informe o quarto numero: "));
// let num5 = parseInt(prompt("Informe o quinto numero: "));

// for (let i = 0; i < num1; i++) {
//     console.log(`${i+1} x ${num1} = ${(i+1)*num1}`);
// }
// for (let i = 0; i < num2; i++) {
//     console.log(`${i+1} x ${num2} = ${(i+1)*num2}`);
// }
// for (let i = 0; i < num3; i++) {
//     console.log(`${i+1} x ${num3} = ${(i+1)*num3}`);
// }
// for (let i = 0; i < num4; i++) {
//     console.log(`${i+1} x ${num4} = ${(i+1)*num4}`);
// }
// for (let i = 0; i < num5; i++) {
//     console.log(`${i+1} x ${num5} = ${(i+1)*num5}`);
// }

//----------------------------------------------------------------

//14
// let numero = 1;
// let acumulador = 0;
// let contador = 0;
// while (numero != 0) {
//   numero = parseFloat(prompt("Informe outro numero: "));
//   acumulador += numero;
//   contador++;
// }
// console.log(acumulador / contador);

//----------------------------------------------------------------

//15
// let numero = 1;
// let peso = 1;
// let acumuladorNumero = 0;
// let acumuladorPeso = 0;

// while (numero != 0 ) {
//   numero = parseFloat(prompt("Informe o numeros: "));
//   peso = parseFloat(prompt("Informe o peso: "));
//     acumuladorNumero += numero;
//     acumuladorPeso += peso;
// }

// console.log(acumuladorNumero / acumuladorPeso);

//----------------------------------------------------------------

//16
// let numero = 100;
// let limite = 0;
// while (limite < 50) {
//   let primo = true;
//   for (let i = 2; i <= Math.sqrt(numero); i++) {
//     if (numero % i === 0) {
//       primo = false;
//       break;
//     }
//   }
//   if (primo) {
//     console.log(numero);
//     limite++;
//   }
//   numero++;
// }
