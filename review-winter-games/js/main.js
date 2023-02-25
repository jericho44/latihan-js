// *MAP*
// let bestRappers2020 = ['Dylan', 'Polo G', 'Dylan']

// let bestRappersAllTime = bestRappers2020.map(x => 'Dylan')
// console.log("1" + bestRappersAllTime);

// bestRappersAllTime.unshift('Dylan')
// bestRappersAllTime.push('Dylan')

// console.log("2" + bestRappersAllTime);

// Create a function that takes in an array of numbers. Return a new array containing everu even number from the original array Bonus: do not ue map or filter

// function evenOnly(arr) {
//     let numbers = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0)
//             numbers.push(arr[i])
//     }
//     return numbers
// }
// console.log(evenOnly([1, 2, 3, 4, 5, 6]));

// ANOTHER SOLUTION

function onlyEvensFinder(arr) {
    let onlyEven = []
    arr.forEach(num => {
        if (num % 2 === 0) {
            onlyEven.push(num)
        }
    })

    return onlyEven
}

console.log(onlyEvensFinder([3, 3, 3, 2, 6, 7, 10, 200]));