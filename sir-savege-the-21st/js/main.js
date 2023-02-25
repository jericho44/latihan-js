//Create a function that has a loop that prints '21' 21 times to the console and then call that function
// Bonus can you mak it print '21' 21 times to the dom

document.querySelector('h1').addEventListener('click', sirSavageThe21st)

function sirSavageThe21st() {
    for (let i = 1; i <= 21; i++) {
        console.log('21');
        document.querySelector('#savageSays').innerText += i + ' ';
    }
}