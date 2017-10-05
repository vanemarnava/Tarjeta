
 function principal()
{
	do{
		var answer = prompt("Ingresa el numero de su tarjeta de credito"); //pregunta el numero de la tarjeta
		/*
		if (answer === "" )
		{
			return alert("Debe ingresar algun numero valido");
		}
		else
		{
			isValidCard();
		}
		*/
		isValidCard();

	}while (answer === " ");
}
  

function isValidCard(num)
{
	
	var newNumbers = num.split("") //pasar la info que se ingreso por la consola que esta en string a array (numbers), se coloca comilla sin espacio para que separe a cada numero.
	
	var array = [newNumbers]; //colocar los numeros en un array

	array.reverse(); // revertir los numero ingresados en el mismo array

	for(var i = 1 ; i < array.length; i + 2)// determinar las posiciones pares
	{
		//var operation = 0;

		if( array[i] * 2 >= 10 )// los numeros de los casilleros pares se multiplican por dos y
		{					//si el resultado da igual o mayor a cero, sus digitos se deben sumar
			var suma = 0;
			var arrayAux = []; // nuevo array auxiliar para colocar los digitos que se deben sumar
  
  			for (var x = 0 ; x < arrayAux.length ; x++)//recorrer cada digito que conforma la suma 
  			{
    			suma = suma + arrayAux[x]; //sumar dichos digitos
  			}
				return suma;//entrega la suma y debe ser ingresado en el array principal

			if(  )
			{
				sum2 % 10 === 0	
			}
		}
		else
		{
			return array[i];
		}
		//var sum = i * 2;
	}  
}

principal();



