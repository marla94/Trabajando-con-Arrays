// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

// Función para comparar strings
function compareStrings(string1, string2) {
  if (string1.toUpperCase() > string2.toUpperCase()) {
    return 1;
  }

  if (string1.toUpperCase() < string2.toUpperCase()) {
    return -1;
  }
    
  return 0;
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  let stringArray = strangeArray.filter((item) => typeof item === "string");
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
  showList(stringArray.sort(compareStrings));
});
