"use Strict"

let s = "3.141"

// String in eine Ganzzahl
console.log(parseInt(s, 10))
// String in eine Kommazahl umwandeln
console.log(parseFloat(s))
// Achtung beim Rechnen mit Kommazahlen
let result = (1/3) * 3 
console.log(result)

//zahl zu sting
let n = 3.141
console.log("" + n)
console.log(n.toExponential())
//kommastellen
console.log(n.toFixed(2))
