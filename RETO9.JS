/*
Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])
// -> 1 (cambia la primera luz a verde)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)

*/

lightRow=['🟢', '🟢','🔴', '🟢', '🔴', '🟢']

function adjustLights(lights){
let changes1=0
let changes2=0

    for(let i=0; i<lightRow.length; i++){
        const correctLight1 = i % 2 === 0 ? '🔴' : '🟢'
        const correctLight2 = i % 2 === 0 ? '🟢' : '🔴'

       if(lights[i]!=correctLight1){
        changes1++
       }
       if(lights[i] != correctLight2){
        changes2++
       }
    
}
    return Math.min(changes1, changes2)
}
