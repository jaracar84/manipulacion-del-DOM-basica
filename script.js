const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('mouseover', btnOnClick);

function btnOnClick() {
// const sumaInputs = Number(input1.value) + Number(input2.value)
pResult.innerHTML = "El resultado es: " + (Number(input1.value) + Number(input2.value));
alert("Siiii")
}

