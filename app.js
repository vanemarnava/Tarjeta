
do {
  var answer = prompt('Ingresa el numero de su tarjeta de credito'); /* pregunta el numero de la tarjeta*/
  if (answer !== '' && answer !== ' ') { /* si se ha ingresado algo o no hay espacio vacio*/
    isValidCard(answer); /* pasar a la funcion de validar tarjeta*/
  } else { /* si no es el caso*/
    alert('Debes ingresar un numero'); /* pedir ingresar un numero valido*/
  }	
} while (answer === '' || answer === ' '); 
function isValidCard(num) {	
  var array = []; 
  var size = num.length;
  var lastPosition = size - 1;
  var sum = 0;

  for (var i = lastPosition; i >= 0; i--) {
    array.push(parseInt(num[i]));
  }
  for (var j = 1; j <= array.length; j++) {
    if ((j % 2) === 0) {
      var number = array[j - 1] * 2;
      if (number >= 10) {
        number = number.toString();
        var numOne = parseInt(number[0]);
        var numberTwo = parseInt(number[1]);
        array[j - 1] = numOne + numberTwo;
      } else {
        array[j - 1] = number;
      }
    }
  }

  for (var nu = 0; nu < array.length; nu++) { 
    sum = sum = array[nu];
  }
  if (sum % 10 === 0) {
    return alert('Numero de tarjeta valido');
  } else if (sum % 10 !== 0) {
    alert('Numero invalido');
  }
}  