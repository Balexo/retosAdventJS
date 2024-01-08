const giftIds = [2, 1, 3, 5, 3, 2]

//Busca el primer elemento que aparece repetido en el array giftIds. 
// Aunque el 2 y el 3 se repiten, el 3 aparece primero por segunda vez

const firstRepeatedElement = giftIds.find((element, index, array) => {
    console.log(array.indexOf(element))
    console.log("index:", index)
  return array.indexOf(element) !== index;
})

console.log(`El primer elemento que se repite en el array es ${firstRepeatedElement}`);

