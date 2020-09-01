export const PI = Math.PI;

export let usuario= "Humberto";
export let password= "qwerty";

// importar por defecto


// solo puedes tener una sola exportacion por default
export default function saludar() {
    console.log("Hola Modulos de JS");
}

// para exportar por defaul un constante lo hacemos de la siguiente manera:
// tiene que ver con las funciones expresadas 

// let animal = "perro";
// export default animal;

export class Saludar{
    constructor(){
        console.log("Hola exportando clase");
    }
};

