// tag, id, class
// single as plural 
const input = document.getElementById('input-cost')
let paragraph = document.getElementById('show-calculated')
// let button = document.getElementById('btn')

function Calculate() {
    let number =  Number(input.value);

    if (number <= 100) {
        number += 10;
    }

    paragraph.innerHTML = `Delivery Money ${number}`;

}