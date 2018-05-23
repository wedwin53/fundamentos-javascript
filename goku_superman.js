let vidaGoku = 100
let vidaSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12


const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0

//math.round redondea el resultado de la OP

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)
 
let round = 0

while (ambosSiguenVivos()) {
	//se incrementa en 1 cada vez que el ciclo termine
	round++
	//aca se muestra el round actual en cada iteracion 
	console.log(`Round ${round}`)

	const golpeGoku = calcularGolpe()
	const golpeSuperman = calcularGolpe()

	if (golpeGoku > golpeSuperman) {
		//ataque de goku
		console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`)
		//vidaSuperman = vidaSuperman - golpeGoku
		vidaSuperman -= golpeGoku
		console.log(`Superman queda en ${vidaSuperman} de vida`)
	} else {
		//ataque de Superman
		console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`)
		vidaGoku -= golpeSuperman
		console.log(`Goku queda en ${vidaGoku} de vida`)
	}

}

if (gokuSigueVivo()) {
	console.log(`Goku gano la pelea. Su vida es de: ${vidaGoku}`)
} else {
	console.log(`Superman gano la pelea, SU vida es de: ${vidaSuperman}`)
}