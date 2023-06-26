"use strict"

/**
 * Mit einem Array Können wir eine Liste speichern
 */

let students = 
[
    "Selinay Ivgin",
    "Rang Taleb",
    "Ara Muhaa",
    "Michael x Ash"
]

//Prüfen : ist ein Element im Array vorhanden ?
console.log(students.indexOf("Selinay Ivgin"))

//wenn ein Element nicht existiert 
console.log(students.indexOf("Selinaysadoando Ivgin"))

//Array sortieren (Alphabetisch)
students.sort()
console.log(students)

//Sortieren Umdrehem

students.reverse()
console.log(students)

//wichtige sparse Arrays
students[30] = "Alex"
console.log(students)

// Die .splice funktion zum Entfernen von Elementen
students.splice(0, 1)
console.log(students)

// Die .splice funktion zum Hinzufügen von Elementen
students.splice(0, 0 , "Ali")
console.log(students)
