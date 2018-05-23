const starWars7 = 'Star Wars: El despertar de la fuerza'
const pgStarWars7 = 13

const nameSacha = 'Sacha'
const ageSacha = 26

const nameSanti = 'Santi'
const ageSanti = 12

function canWatchStarWars7(name, age, isWithAdult = false) {
	// body...

	if (age >= pgStarWars7){
		alert(`${name} puede pasar a ver ${starWars7}`)
	} else if (isWithAdult) {
		alert(`${name} Puede pasar a ver ${starWars7} Va acómpañado de un adulto`)
	} else {
		alert(`${name} NO puede ver ${starWars7}.
			Tiene ${age} años y necesita tener ${pgStarWars7}`)
	}
}

canWatchStarWars7(nameSacha, ageSacha)
canWatchStarWars7(nameSanti, ageSanti, true)