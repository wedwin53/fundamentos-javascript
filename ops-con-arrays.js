//suma de valores de array
function suma (...numeros) {
	return numeros.reduce(function(acum, numero){
		acum += numero
		return acum
	}, 0)
}

// push agrega valor al array, aca se doblan los resultados de c/elemento del array
function dobles (...numeros) {
	//ejm largo (comentado)
	// const resultado = []
	// for (let i = 0; i < numeros.length; i++){
	// 	resultado.push(numeros[i] * 2)
	// }
	// return resultado
	
	return numeros.map(numero => numero * 2)
}

// devuelve numeros pares de un array
function pares (...numeros) {
	return numeros.filter(numero => numero % 2 == 0)
}

suma(4, 8, 12, 4646, 7, 9)