const nombre = prompt("Por favor ingrese su nombre");
const edad = prompt("Por favor ingrese su edad");

alert(
  `Hola ${nombre} el año pasado tenías ${
    parseInt(edad) - 1
  } años y el año próximo tendrás ${parseInt(edad) + 1}`
);