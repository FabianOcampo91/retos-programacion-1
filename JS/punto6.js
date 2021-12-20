const porcionesTotal = prompt("Ingrese la cantidad total de porciones");
const porcionesConsumidas = prompt(
  "Ingrese la cantidad de porciones consumidas"
);

const resultado = parseInt(porcionesTotal) - parseInt(porcionesConsumidas);

alert(
  `Ingresaron ${porcionesTotal} porciones de pizzas, se consumieron ${porcionesConsumidas} porciones y quedaron ${resultado} porciones.`
);