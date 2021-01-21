/**
 * TAREA 1 - SCALAB - MASTER JAVASCRIPT
 * REALIZADO POR: AGUSTIN OROZCO
 * 
 * https://github.com/JuliusEscalab/js_master_gen2_6_1_21/blob/master/tareas/Tarea1.md
 * Escribir una función a la que se pasa como parámetro un número entero y devuelve como resultado un texto que indica si el número es par o impar. 
 * Mostrar por pantalla el resultado devuelto por la función.
 *
 */

function determinaPar(numero) {
    if (typeof(numero)=="number") {
        if (numero % 2 == 0) {
            console.log(`El numero ingresado: ${numero} es par!`);
        }else{
            console.log(`El numero ingresado: ${numero} es impar!`);
        }
    }else{
        console.log("Debe de ingresar un valor numérico")
    }
}

determinaPar(3);
determinaPar(10);
determinaPar('texto');
/**
 * Según este string "abcdefghijklmnñopqrstuvwxyz", hacer una función que recibe un parámetro (un caracter o una letra),
 *  y la función me debe devolver en qué posición en la cadena del string se encuentra el caracter entregado como argumento.
 *  Para realizar esto deben buscar en el prototipo String.
 */


var cadenaTexto = "abcdefghijklmnñopqrstuvwxyz";

function determinaPosicion(caracter) {  
    if (caracter.length==1 && typeof(caracter) == "string") {
        var resultado = cadenaTexto.indexOf(caracter);
        console.log(`La posición del caracter '${caracter}' en la cadena de texto es: ${resultado}`);
    }else{
        console.log("Por favor, introduzca un caracter de la 'a' hasta la 'z'.")
    }
    
}

determinaPosicion('l');
determinaPosicion('q');
determinaPosicion(54);
determinaPosicion('casa');

/**
 * Hacer una función que reciba un precio, y este me devuelva el precio con impuesto de 0.19%.
 * Si yo ingreso 1000 a la función, me debería retornar con el formato "El precio con impuesto es de $1190"
 */


var IMPUESTO = 0.19;

function precioConImpuesto(precio) {
    if (typeof(precio)=="number") {
        total = ((precio*IMPUESTO)+precio).toFixed(2);
        console.log(`El valor total con impuesto de la cantidad ingresada (${precio}) es: ${total}`);
    }else{
        console.log("Precio ingresado no es válido, ingrese solo números");
    }
}

precioConImpuesto(1000);
precioConImpuesto(550.80);
precioConImpuesto("texto");

/**
 * 
 * Hacer un closure con contexto de "una persona tira un dado". Es decir, yo le entrego un nombre, por ejemplo:
 * var dadoJulio = nuevoDado('julio')
 * Y que la respuesta de dadoJulio() sea:
 * dadoJulio() -> "Julio tiró un dado y salió 6" 
 * dadoJulio() -> "Julio tiró un dado y salió 3" 
 * dadoJulio() -> "Julio tiró un dado y salió 5"
 * Por lo tanto, la respuesta del closure debe ser aleatoria y el dado debe ser de 6 caras (osea del 1 al 6). 
 */


function nuevoDado(nombre) {
    return function () {
        valorDado = Math.floor(Math.random() * (7 - 1)) + 1;
        console.log(`${nombre} tiró el dado y el resultado fué ${valorDado}`);
    };
    
}

var dadoJugador=nuevoDado("Agustin");
dadoJugador();
dadoJugador();
dadoJugador();

/**
 * Generar un prototipo llamado Persona que va a recibir 2 argumentos (nombre completo y edad).
 * El prototipo debe tener un método que sea guardarEnLocalStorage y guardarEnSessionStorage,
 * estos métodos deben guardar nombre completo y edad en el local storage y session storage.
 * Al guardar estos elementos, deben visualizarse a través del debugger de chrome o de algún otro browser.
 */

function Persona(nombreCompleto, edad) {
    this.nombreCompleto=nombreCompleto;
    this.edad=edad;
}

Persona.prototype.guardarEnLocalStorage = function () {
    localStorage.setItem('nombreCompleto',this.nombreCompleto);
    localStorage.setItem('edad', this.edad);
}

Persona.prototype.guardarEnSessionStorage = function () {
    sessionStorage.setItem('nombreCompleto', this.nombreCompleto);
    sessionStorage.setItem('edad', this.edad);
}

var personita1 = new Persona("Agustin Orozco", 10);
personita1.guardarEnLocalStorage();
personita1.guardarEnSessionStorage();

// localStorage.clear()
// sessionStorage.clear()