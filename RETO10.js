/*
¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.

Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.

Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.

Por ejemplo si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:

   1
  2 3
 1 2 3
1 2 3 1
   |
Si recibimos la cadena *@o y el número 3, el árbol que debemos devolver es:

  *
 @ o
* @ o
  |
*/

function createChristmasTree2(ornaments, height) {
  let tree=""
  let ornamentIndex=0
  
  for(let row=1; row<=height; row++){
    let newRow=""
    let spaces=" ".repeat(height - row)

    for(let i=0; i<row; i++){
      newRow += ornaments[ornamentIndex % ornaments.length] + " "   
      ornamentIndex++
     
  }
  newRow=newRow.trim()
  tree+=spaces + newRow  + "\n"   
  
}
tree+= " ".repeat(height - 1)
tree+= "|\n"
return tree
}
console.log(createChristmasTree2("123",5))