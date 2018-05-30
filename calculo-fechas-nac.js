//crear un objeto de tipo date, para el contructor de tipo date, recibe los parametros
//date(año, mes -1, dia) los meses comienzan en 0
const nacimiento = new Date(1983, 4, 14)
console.log(nacimiento)

const hoy = new Date()

//devuelve el tiempo en milisegundos
const tiempo = hoy - nacimiento

//llevar ese tiempo a segundos dividimos entre 1000
const tiempoSegundos = tiempo / 1000

//proximo cumpleños (que dia cae)
const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())

