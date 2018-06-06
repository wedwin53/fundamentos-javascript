function saludarFamilia (apellido) {
	return function saludarMiembroDeFamilia(nombre){
		console.log(`Hola ${nombre} ${apellido}`)
	}
}


const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")
const saludarRebolledo = saludarFamilia("Rebolledo")


saludarGomez("Pedro")
saludarGomez("Juan")

saludarPerez("Manuel")

saludarRebolledo("Edwin")

function makePrefixer (prefijo) {
	return function agregaPrefijo (frase){
		console.log(`${prefijo}${frase}`)
	}
}

const prefijoRe = makePrefixer("Re")

prefijoRe("Malo")