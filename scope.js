acceso a variables desdel funcion

var nombre = edwin

function showName () {
	console.log(nombre) //desde aca se obtiene acceso a la variable fuera de la funcion (dentro del mismo scope)
}
showName()
