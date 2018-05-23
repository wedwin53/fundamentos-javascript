const nombre = 'Edwin'
const dias = [
	"lunes",
	"martes",
	"miercoles",
	"jueves",
	"viernes",
	"sabado",
	"domingo"
]

function correr () {
	// body... 
	const min = 5
	const max = 15
	//math.floor calcula el valor mas bajo posible (redondea hacia abajo)
	//math.round es redondeo aritmetico
	return Math.round(Math.random() * (max - min)) + min
}
//se crea acumulador
let totalKms = 0

for (let i = 0; i < dias.length; i++) {
	const kms = correr()
	totalKms += kms
	console.log(`El dia ${dias[i]} ${nombre} corrio ${kms} kms`)
}
const promedioKms = totalKms / dias.length
console.log(`En Promedio, ${nombre} corrio ${promedioKms.toFixed(2)}Kms`)