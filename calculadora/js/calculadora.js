console.log("gabriel");
var apellido = ("blancas");
console.log (apellido);



// var n1 = prompt("ingresa el primer numero");
// var n2 = prompt("ingresa el segundo numero");

// // var suma = n1 + n2;
// // parserInt(n1);
// // parseInt(n2);
// var resta =parseInt(n1) - parseInt(n2);
// console.log(resta);
// document.write(resta);




// sintaxis la forma correcta de escribir codigo
// function seguida del nombre del evento o del metodo seguido + parentesis sin espacio y abrimos llaves
// function Suma() {
//     var n1 = prompt("dime el primer numero");
//     var n2 = prompt("dime el segundo numero");
//     document.write("la suma de " + n1 + " y " + n2 + " es:");
//     document.write(parseInt(n1) + parseInt(n2) );
//     console.log (Suma);

// }
// RESTA
function Resta() {
    // mandar a llamar el elemento con getElement por id en este caso es txtN1
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    var resta = parseInt(n1) - parseInt(n2);
    alert("la resta es: " + resta);   
}



function Multiplicacion() {
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    var Multiplicacion = parseInt(n1) * parseInt(n2);
    alert(" la multiplicacion es: " + Multiplicacion);
}




function Division() {
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    var dividir = parseInt(n1) / parseInt(n2);
    // concatenacion es una suma de caracteres
    // alert(" la divicion es: " + dividir);
    alert("la divicion de " + n1 + " / " + n2 + " es " + dividir);
}




function Multiplicacion2() {
    var n1 = document.getElementById('txtM3').value;
    var n2 = document.getElementById('txtM4').value;
    var Multiplicacion = parseInt(n1) * parseInt(n2);
    alert("La multiplicación de  " + n1 + "  X "  + n2 + " es : " + Multiplicacion);
}
