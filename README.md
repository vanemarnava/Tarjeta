

## README del trabajo sobre Tarjeta de crédito válida

*Creadora: Vanessa Martinez Navarro.*

*Este achivo es la version 0.0.1*

*Creado con la herramienta Sublime Text.*

_Utiliza la tecnologia de javascript y html._

*Funciona a traves de ventanas emergentes en las cuales se les ingresa informacion, devolviendo a traves de otra ventana la respuesta.*

*Algoritmo*

Se crea una funcion principal
{
	+ Se crea una variable promp para que el usuario ingrese una alternativa;
	
	+ Se llama a la funcion isValidCard;

}Si lo ingresado no es lo correcto, se seguira ejecutando el bucle pidiendole al usuario una respuesta


Se crea la funcion isValidCard
{
	+ Se crea una variable newNumbers (que es array) para ingresar la respuesta del usuario, transformandolo de string a array;
	+ Se crea una variable array para ingresar los ahora numeros, separados entre si;
	+ Se invoca a la funcion reverse para que voltee los numeros;
	
	Se crea un for para que itere en el array cada dos espacios
	{
		Si el numero que se encuentra en esa posicion al multiplicarse por dos resulta un numero igual o mayor a 10
		{
			+ Se crea una variable suma;
			Se crea un for para que itere entre los digitos a sumar
			{
				se realiza la suma y se agrega al array auxiliar;
			}
			se retorna la suma y se ingresa en el array principal;
			si la suma de todos los digitos de array principal y el residuo de 10 da como valor 0
			{
				
			}
		}
		De lo contrario
		{
			se deja igual y se ingresan en el array principal;
		}
	}
	
}


















