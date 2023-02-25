// *Variables*
// Create a variable and console log the value
let number = 10;
console.log(number);

// Create a variable, add 10 to it, and alert the value
number += 10;
alert(number);

// *Functions*
// create a function that subtracts 4 number and alerts the difference
function subtractsFourNumber(n1, n2, n3, n4) {
    subtract = n1 - n2 - n3 - n4
    alert(subtract)
}

// Create a function that divides one number by another and returns the remainder
function returnRemainder(robot, unicorn) {
    return robot % unicorn;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater that 50 alert Jumanji
function sumTwoNumber(n1, n2) {
    if (n1 + n2 > 50) {
        alert('Jumanji')
    }
}

// Create a function that multiplys three numbers and if the product is divisible bu 3 alert ZEBRA
function multiThreeAndCheck(n1, n2, n3) {
    let product = n1 * n2 * n3;
    if (product % 3 === 0) {
        alert('ZEBRA')
    }
}

// *LOOP*
// Create a function that takes in a word and a number. Console log the word x time where x was the number passed
function loopWordXTimes(word, num) {
    for (let i = 1; i <= num; i++) {
        console.log(word);
    }
}
