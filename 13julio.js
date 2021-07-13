// Ejercicio 1

const empleados = [{ name: "Luis", email: "Luis@gmail.com" }, { name: "Ana", email: "Ana@gmail.com" }, { name: "Andrea", email: "Andrea@gmail.com" }];

let [, Ana,] = empleados;
console.log(Ana);


let [Luis, ,] = empleados
console.log(Luis)


let { email } = Luis;

console.log(email);



// Ejercicio 2

// Usa destructuración para intercambiar los valores de a y b

// Inicialmente
let a = 5;
let b = 3;

[a, b] = [b, a];

console.log("a" + a + " b" + b);


// Ejercicio 3


const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};


let { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES


console.log(maximaHoy + " " + maximaManana);





// SPREAD/REST

// EJERCICIO 1

//Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.



function sumEveryOther(...numerosParaSumar) {
    let total = 0
    for (let i = 0; i < numerosParaSumar.length; i++) {
        total += numerosParaSumar[i]
    }
    return total
}

console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //26



// Ejercicio 2
// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos(incluyendo números y strings y retorne la suma solo de los números.

function addOnlyNums(...soloNumeros) {
    let cont = 0;

    for (let i = 0; i < soloNumeros.length; i++) {

        typeof soloNumeros[i] === 'number' ? cont += soloNumeros[i] : console.log(soloNumeros[i]);


    }

    return cont;




}
console.log(addOnlyNums(1, "perro", 2, 4)) // 7


// Ejercicio 3

//Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

let countTheArgs = (...element) => element.length;


countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4

// Ejercicio 4

//Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

let text1 = ["nombre", "edad"]

let text2 = ["empleo", "color"]

let combineTwoArrays = (eje1, eje2) => {

    return nuevoeje = [...eje1, ...eje2];

}

console.log(combineTwoArrays(text1, text2));




// Ejercicio 5

// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.


let onlyUniques = (...parametro) => {

    let unicos = [];

    parametro.forEach((e) => {
        if (unicos.includes(e) == false) {
            unicos.push(e);
        }
    })

    return unicos;
}

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo")); //['gato', 'pollo', 'cerdo']
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]




// Ejercicio 6

// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

let combineAllArrays = (...eje1) => {
    let vacio = []
    for (let i = 0; i < eje1.length; i++) {
        vacio.push(...eje1[i]);
    }
    return vacio

}

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); // [3, 6, 7, 8, 2, 7, 3, 1]
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]


// Ejercicio 7

//Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

let num = [1, 2, 3, 4];

let sumAndSquare=(...element)=>{
    let contador = 0;

    for (let i = 0; i < element.length; i++) {
        contador += (element[i] * element[i])
    }

    return contador
}

console.log(sumAndSquare(...num));