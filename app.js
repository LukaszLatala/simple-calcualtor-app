const addBtn = document.querySelector(".add");
const minusBtn = document.querySelector(".minus");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");

const result = document.getElementById("resultArea");
const btnReset = document.querySelector(".btnReset");

function dodawanie(a, b) {
  a = Number(document.getElementById("number-one").value);
  b = Number(document.getElementById("number-two").value);
  let c = a + b;

  result.innerHTML = `Wynik to: ${c}`;
}

function odejmowanie(a, b) {
  a = Number(document.getElementById("number-one").value);
  b = Number(document.getElementById("number-two").value);
  let c = a - b;

  result.innerHTML = `Wynik to: ${c}`;
}

function mnozenie(a, b) {
  a = Number(document.getElementById("number-one").value);
  b = Number(document.getElementById("number-two").value);
  let c = a * b;

  result.innerHTML = `Wynik to: ${c}`;
}

function dzielenie(a, b) {
  a = Number(document.getElementById("number-one").value);
  b = Number(document.getElementById("number-two").value);
  let c = a / b;

  result.innerHTML = `Wynik to: ${c}`;
}

addBtn.addEventListener("click", dodawanie);
minusBtn.addEventListener("click", odejmowanie);
multiplyBtn.addEventListener("click", mnozenie);
divideBtn.addEventListener("click", dzielenie);

const removeTextContent = function () {
  result.innerHTML = `Wynik to: 0`;
  document.getElementById("number-one").value = "";
  document.getElementById("number-two").value = "";
};
btnReset.addEventListener("click", removeTextContent);
