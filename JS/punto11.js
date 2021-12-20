const num1 = Number(prompt("Ingrese un número mayor a 1000"));
const num2 = Number(prompt("Ingrese un número mayor a 100"));

const res = (num1 / num2).toFixed(2);

alert(`En el num ${num1} caben ${res} números similares a ${num2}`);