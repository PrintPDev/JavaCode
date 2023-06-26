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
console.log(students)

//was ist der Typ von einem Array ?
console.log(typeof students)
console.log(students instanceof Array)

// Wie Viele Elemente sind in dem Array?
console.log(".lenght",students.length)

// Auf ein Einzelnes Element zugreifen 
console.log("[0]", students[0])

// Element hinzufügen
students.push("Joker","Joker2")
console.log(students)

// Letztes Elemnt entfernen
const Newlist = students.pop()
console.log(Newlist)
console.log(students)

//Ein Element überschreiben
students[0] = "Selinay Taleb"
console.log(students)