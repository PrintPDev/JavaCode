"use strict"

let gretting = "Hallo welt"

// Die Anzahl der zeichen in  einem String
console.log(gretting.length)

// Ein einzelnes Zeichen abfragen
console.log(gretting.charAt(0))
console.log(gretting[0])
//  Wo findet sich ein Zeichen in einem String ?
console.log(gretting.indexOf("w"))
// Großbuchstaben bzw. Kleinbuchstaben
console.log(gretting.toLowerCase())
console.log(gretting.toUpperCase())
// Text ersetzen
console.log(gretting.replace("Hallo", "Hey"))
// Zeichen rechts und links vom Sting entfernen
console.log(gretting.trim().length)