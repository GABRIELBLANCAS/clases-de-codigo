// probar que esta cargando JS
var nombre ="* GABRIEL";
var apellido ="BLANCAS MEJIA *";
console.log("HOLA MUNDO");
console.log(nombre , apellido);


// promt interactua con la pagina
// palabra reservada es algo propio del lenguaje

// var nom = prompt("dime tu nombre" , "ejemplo de nombre" );
// console.log(nom);
// console.log("MI APELLIDO ES---->" + nom );


// sintaxis para funciones y eventos
// palabra reservada funtion + nombre del evento + parentecis + llaves

function Ingresar() { 
    console.log("saludar");
    var nom = prompt("dime tu nombre" , "ejemplo de nombre" );
console.log(nom);

}
console.log( "\f");

function Enviar() {
    var nonb = prompt("ingresa tu nombre" , "nombre" );
    var edad = prompt( "ingresar edad" , "edad");
    console.log(nonb + "\n" + edad);
    // document. write permite ver el contenido en la vista
    document.write(nonb  , edad);
}


function Suma() {
    var n1 = prompt("dime el primer num");
    var n2 = prompt("dime el segundo numero");
    console(n1 + n2);

}


