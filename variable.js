
// String, Number, Array, Boolean, Object

var variable = 0 
var variable2 = "0"
var variable3 = true
var variable4 = { "nombre": "estudiante1" }
var variable5 = [
    { "nombre": "estudiante1" },
    { "nombre": "estudiante2" },
    { "nombre": "estudiante3" }
]

const variable // (inmutable)

var 

let 

// const suma = funcion { return }

// imprimir suma

// scope el ciclo de vida 

// si (x es verdadera)
if (true){
    var nombre = "carlos";
    let apellido = "grisales"
}

console.log('nombre :', nombre);
console.log('apellido :', apellido);


// Siclo de vida de una variable//

if (true){
    var nombre = "";
    let apellido = "grisales";
    const edad = "24";
    console.log('apellido :', apellido); 
    console.log('edad', edad)
}

console.log('nombre', nombre);

// if, else ,else if ( si , sino , sino si )

 // si un numero es par 

 if (6 % 2) {
    console.log('es par');
 } else {
     console.log('no es par');
 }

// Recuerden que solo se ejecuta un if al ser verdadero.
 if (6 % 2 == 0) {
    console.log('es par');
 } 
 else if( 6 + 4 == 10){
    console.log('su suma es dia');
 } 
 else {
     console.log('no es par');
 } 

//  Operaciones de comparacion

// igual == Comparo valor  / === typeof(valor) === typeof(valor2)

// No es igual !=  / !== typeof(valor) !== typeof(valor2)

// Mayor que > mayor que he igual >=

// Mayor que < mayor que he igual <=

// And  &&  Or   ||  negacion !


var a1 = true && true; true

var a2 = true || true; true

var a2 = false || true; false

var a3 = !true

console.log(a1);

// mandame 10 "10"

// typeof

var functionPreuba = function() {
    console.log('imprimir')
}

console.log(typeof(functionPreuba));

const nulla = null
const nulla = undefined

console.log(typeof(nulla));