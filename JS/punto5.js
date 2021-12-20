const num1 = prompt("Ingrese un número por favor");
const num2 = prompt("Ingrese un número por favor");
const num3 = prompt("Ingrese un número por favor");

const resultado = (parseFloat(num1) + parseFloat(num2)) * num3;

alert(
  `El resultado de la suma de ${num1} y ${num2}, multiplicado por ${num3} es: ${resultado.toFixed(
    2
  )}`
);