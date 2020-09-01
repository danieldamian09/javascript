import saludar, {Saludar, PI, usuario} from './constante.js';
import {sumar, restar, aritmetica} from './aritmetica.js';
// le podemos dar un alias al archivo con as para darle otro nombre


// aritmetica as calculos
// con esto le damos el alias a aritmetica de calculos 

console.log("Archivo modulos.js");

console.log(PI, usuario);

console.log(sumar(3,4));

console.log(aritmetica.restar(5,2));

saludar();

// console.log(animal);

// let resultado = sumar(4,5);

// console.log(resultado);

let saludo = new Saludar();
saludo;

