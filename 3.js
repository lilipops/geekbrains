'use strict'
let a = +parseInt(prompt('vedite chislo'));
let b = +parseInt(prompt('vedite chislo'));
let result = 0
if (a >= 0 && b >= 0) {
    if (a > b) {
        result = a - b
        alert(result)
    } else {
        result = b - a
        alert(result)
    }
} 
if (a < 0 && b < 0) {
    result = a * b
    alert(result)
} else {
    result = a + b
    alert(result)
}