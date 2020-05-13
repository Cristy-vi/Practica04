
// comentario una linea//

/*
Practica04
Hecho por Cristina Vicente
*/

/*
Declaracion de variables 
------------------------
Var Ciudad ='palma'

*/


/*
Funciones:
---------
*/
function suma (a,b){
}
function resta (a,b){
}
function multi (a,b){
}




/*
Tipo de datos:
'var' sirve para crear una variable
*/

/*
Las pruebas las hago con el comando:  console.log(parrafo);
*/

//Asigno una informacion variable
var numero: 5;

//Valor de textos (Strings)
var texto ='Verde';

//Valor Boolean
var verdadero = True;
var falso = false;

//valor de tipos de objeto:
var lista_array_arreglo = [13, 20, 34, 44, 5];

//Los strings (textos) siempre se ponen con comillas dobles "" o simples ' '

var objeto = {
    Nombre: 'Cristina'
    Apellido1: 'Vicente'
    Ciudad: 'Palma'
    CP: 07006

}

//saltos de linea con \n
'Escribo una primera linea \n escribo la segunda que quedará debajo \n'

//String entre texto
var parrafo = "Libro de \"autor\" de 2010"

//Caracteres de escape: Cuidado con los textos que llevan barra baja \
Var disco_duro = "c:\\Escritorio"

/*
Funciones
*/


//funciones
/*
Para llamar a una funcion: 
function nuevafuncion (); {}
nombredeclaradodelafuncion (); {}
*/

	*/
	// Funciones Declarativas
	function nuevafuncion () {
        return 'Saludos';
    }
        
    //Funciones expresivas
	var nuevafuncion = function () {
        return 'Me despido';
    }

    //Funciones con parametros
    //Me suma Valor1 + Valor2
    function suma (valor1, valor2) {
        console.log(valor1 + valor2);
    }

    function resta(valor1, valor2) {
        var resultado = (valor1 - valor2);
        console.log (Resultado);
        }

    //Funciones con parametros y frase simpatica
    //Estoy usando acentos catalanes ``
    function suma (a, b) {
    console.log(`El resultado de la suma es: ${a + b}`);
    }

    //Funciones dentro de strings
    var suma1 = suma1 (10,12);
    var suma2 = suma2 (20,20);


/*
scope
------
Es una variable que podré usar de forma global en cualquier funcion
*/

//scope global (variable global) se usa fuera y dentro de las funciones
var ciudad ='palma';
var valor1 = 100;

//scope local (variable local)
function Lugar (){
var cp= 07006;
console.log(cp + " " + ciudad);
}

/*
Hoistings suceden cuando hay errores de sintaxis, Cuando la consola va antes de la funciones
*/

//EJ.: variable declaration
console.log(pueblo);
var pueblo = 'Porreres'
//dará error , porque se ha cargado la console log primero



//Cuidado con el debil tipado. El simbolo + es concatenar (unir)

10 + "10";
//Resultado 1010 Junta el primer 10 con el segundo (es texto)


//aqui JS sabe que * es multiplicar de verdad
10*"10";
//=100


5 + true;
//=6 (true es 1)


/*COERCION en JAVASCRIPT

la accion de forzar un valor para que se comporte como otro tipo de valor

*/

//Coerciones implicitas

var implicita = 50 + "10";


//coerciones explicita que obligamos (funcion automatica por JS)
var explicito = 10+ Number('10');  
//20

var explicito = String(10) + "10"; (fuerzo que el primer 10 sea un texto)

//Boolean falsos
Boolean(falso);
""
0
Undefined
null
NaN
3 >10

//Boolean verdaderos
Boolean(true);
[] (array)
{}
Function (){{

//Operadores
+ (strings une) sino suma
-
*
/
% (resto o residuo)
** elevado a...

//Operadores igualdad
//= Operador de asignacion EJ:
var nombre= 'loquesea';
// == comparar algo
5== "5"; // True

// === //False, revisa que no es el mismo valor interpreta que tiene comillas
5=== "5";

//!=  (no es igual)

5!= 5; //False

//Operadores de asignacion

+= añade "+ 1" a X (X es el numero variable)
var numero;
numero = numero + 1; //Este es igual a
numero += 1; //Este suma 1
numero++; 
numero--; //añade un numero negativo (resta))

*=

-=

/=


// Operadores de comparacion

> Mayor a menor
< Menor a mayor
>= Mayor o igual
<= Menor o Igual
