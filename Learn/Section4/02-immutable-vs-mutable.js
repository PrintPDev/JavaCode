"use strict"

// Stings sind Immutable (unveränderlich)

let gretting = "Hallo Welt"
gretting = gretting + "!"
console.log(gretting)

// aber Arrays sind mutable (Verändelich!)
let students = ["Max" , "Moritz"]
students.push("Joker")
console.log(students)

//mutable und const...
const students2 = ["Max" , "Moritz"]
students2.push("Joker")
console.log("Students2",students2)