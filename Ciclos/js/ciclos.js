console.log("hola mundo");
console.log("hola mundo");
console.log("hola mundo");
console.log("hola mundo");
console.log("hola mundo");


// MIENTRAS
// SINTAXIS
// var i = 0 ;
// while (i < 6)  {
//     console.log("escuela de codigo" + i);
//     i = i + 1;

// }

// var i = 0;
// do{
//     i += 1;
//     console.log("GABRIEL" + i);
// }
// while(i < 8);





// var salir =true;
// // var numeros = [];
// while(salir){
//     var numero =prompt('ingresa un numero');

//     var seguir = confirm("desea ingresar mas numeros");

//     if(seguir == false ){

//         salir = false;
//     }
// }

// var i = 0;
// do{
//     i += 1;
//     console.log("GABRIEL" + i);
// }
// while(i < 30);



var salir =true;

var numeros =[];

while(salir){
    var numero =prompt('ingresa un numero');
    numeros.push(numero);


    var seguir = confirm('desea ingresar mas numeros');

    if(seguir == false ){
        salir = false;
    }

}
console.log(numeros);