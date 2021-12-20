const cantMillas = prompt("Ingrese la cantidad de millas");

alert(
  `En las ${cantMillas} millas hay: ${parseFloat(cantMillas) * 1.609344} km`
);