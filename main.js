const edades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nuevasEdades = [2, 4, 6, [7, 10, 12], 9, [11, [13, 14, 15, [16]]]];
const personas = [{
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
    genero: "masculino",
}, {
    nombre: "Ana",
    edad: 30,
    ciudad: "Barcelona",
    genero: "femenino",
}, {
    nombre: "Pedro",
    edad: 35,
    ciudad: "Valencia",
    genero: "masculino",
}];
// 0 edades[1]

// for (let i = 0; i < edades.length; i++) {
//     if (edades[i] % 2 == 0) {
//         console.log(edades[i]);
//     }
// }

const numerosPares = edades.filter((numero) => numero % 2 === 0);
const nuevasEdades2 = edades.map((numero) => numero * 2);

// let suma = 0;
// edades.filter((numero) => suma += numero);
// console.log(`la suma es ${suma}`);

const sumaTodosNumeros = edades.reduce((acumulador, numero) => {
    acumulador += numero;
    return acumulador;
}, 10);

// console.log(sumaTodosNumeros);
// console.log(edades);

const todosSonPares = edades.every((numero) => numero % 2 === 0);
// console.log(todosSonPares);

const hayAlgunPar = edades.some((numero) => numero % 2 === 0);
// console.log(hayAlgunPar);


const nuevasEdadesPlanas = nuevasEdades.flat(10);

const examen = edades
    .filter((edad) => edad % 2 === 0)
    .map((edad) => edad * 2);

const examen2 = edades.flatMap((edad) => edad % 2 === 0 ? edad * 2 : []); // [2, [], 4, [] ...];

const agrupaPorGenero = personas.reduce((acumulador, persona) => {
    if (!acumulador[persona.genero]) {
        acumulador[persona.genero] = [];
    }
    acumulador[persona.genero].push(persona);
    return acumulador;
}, {});

// const agrupaPorGeneroUsandoGroupBy = personas.groupBy((persona) => persona.genero);
// console.log(agrupaPorGeneroUsandoGroupBy);

// console.log(agrupaPorGenero);
// console.log(examen2);

