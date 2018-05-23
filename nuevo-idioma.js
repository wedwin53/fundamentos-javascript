function platzom(str){
	let translation  = str
	//si la palabra termina en "ar" se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0,-2)
	}
	// si la palabra inicia con Z, se le añade 	"pe" al final
	if (str.toLowerCase().startsWith('z')) {
		//modo 1: translation = translation + 'pe'
		translation += 'pe'
	}
	//si la palabra tiene 10 o mas letras se parte a la mitad y se coloca un - entre ellas
	const length = translation.length
	if (length >= 10) {
		const firstHalf = translation.slice(0, Math.round(length / 2))
		const secondHalf = translation.slice(Math.round(length / 2))
		translation = `${firstHalf}-${secondHalf}`
	}
	//si la palabra original es un palindromo, ninguna letra anterior cuenta y se devuelve intercalando minsc y mayusc

	const reverse = (str) => str.split('').reverse().join('')
	const minMay = (str) => {
		const length = str.length
		let translation = ''
		let capitalize = true
		for (let i = 0; i < length; i++) {
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}
	if (str == reverse(str)) {
		return minMay(str)

	}	
	return translation
}
console.log(platzom("programar")) // program
console.log(platzom("zorro")) // zorrope
console.log(platzom("zarpar")) // zarppe
console.log(platzom("abecedario")) // abece-dario