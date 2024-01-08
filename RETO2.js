/*
Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa
*/

const gifts1 = ['tren', 'oso', 'pelota']
const materials1 = 'tronesa'

function checkGifts(gifts, materials) {
  const words_contained=[]
  let giftObtained = null;
  for (let i = 0; i < gifts.length; i++) {
    let wordGiftObtained = [];
    for (let j = 0; j < gifts[i].length; j++) { //Si la letra de gifts1 está en materials1 la añadimos al array wordGiftObtained
      if (materials.includes(gifts[i][j])) {
        wordGiftObtained.push(gifts[i][j]);
      } else {
        break;
      }
      if (wordGiftObtained.join('') === gifts[i]) {
        giftObtained = wordGiftObtained.join(''); //Juntamos todas las letras de nuevo y sacamos el regalo
        words_contained.push(giftObtained)
      }
    }
    
  }
  return words_contained;
}

console.log(checkGifts(gifts1, materials1));