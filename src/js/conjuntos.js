//Un nuevo Set con los nombres de tu familia
const family = new Set([
  "Juanjo",
  "Esther",
  "Alejandro",
  "Daniel",
  "Idoia",
  "Asha",
  "Kala",
]);
console.log(family);

//Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
family.add("Daniel");
console.log(family);

//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
family.add("Javascript");
console.log(family);