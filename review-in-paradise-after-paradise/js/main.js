// Create a function that takes in an array. If the first number, is less than last number, alert "Hi". if the fist number grater than the last number, alert "Bye". if they are equal, alert "We close in an hour".

function compareArray(arr) {
    if (arr[0] < arr[arr.length - 1]) {
        alert('Hi')
    } else if (arr[0] > arr[arr.length - 1]) {
        alert('Bye')
    } else {
        alert('We close in an hour.')
        // alert(arr[arr.length - 1])
    }
}

compareArray([1, 2, 3, 4, 5])
compareArray([10, 2, 3, 4, 10])
compareArray([6, 2, 3, 4, 5])

