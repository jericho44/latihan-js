const contestant = document.querySelectorAll('.contestant')
// console.log(contestant);

Array.from(contestant).forEach(element => element.addEventListener('click', checkForRose));

function checkForRose(click) {
    if (click.target.classList.contains('rose')) {
        document.querySelector('#nikki').classList.toggle('hidden')
    } else {
        alert('Wrong!')
    }
}