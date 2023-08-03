// h1 { color: red}
//.parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p')
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form')

/* console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'La Cienaga <br> Oscura'
h1.innerText = 'La Cienaga <br> Oscura'
// console.log(h1.getAttribute('class'))
// h1.setAttribute('class', 'rojo')

h1.classList.add('rojo')
h1.classList.remove('verde')

input.value ="456"
*/
const img = document.createElement('img');
img.setAttribute('src', 'https://media.istockphoto.com/id/1250021058/es/foto/fuente-neon-3d-renderizado-de-ne%C3%B3n-azul-y-rosa-3d-letra-a.jpg?s=612x612&w=0&k=20&c=jWBoG49E_NC9kJfTe--ASGE8hkIYxP1un4Zxe1TWgXI=');
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);

// Interactuando con Usuarios
function sumarInputValues(event) {
    console.log({event});
    event.preventDefault()
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}

// AddEventListener

form.addEventListener('submit', sumarInputValues);