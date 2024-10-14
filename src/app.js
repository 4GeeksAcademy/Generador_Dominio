/* eslint-disable*/
import "bootstrap";
import "./style.css";

import "./assets/img/squirtle_squad.jpg";
import "./assets/img/pokeball.ico";

window.onload = function() {
  //write your code here

  //Declaramos los arrays
  let pronombre = ["el", "tu", "ese", "este"];
  let sustantivo = ["coche", "sapo", "perro", "gato", "ordenador"];
  let adjetivo = ["feo", "bonito", "gordo", "flaco", "grande", "pequeño"];
  let dominio = [".com", ".es", ".net"];
  let combinaciones = "";
  // Bucle externo
  for (let i = 0; i < pronombre.length; i++) {
    // Primer bucle anidado
    for (let j = 0; j < sustantivo.length; j++) {
      // Segundo bucle anidado
      for (let k = 0; k < adjetivo.length; k++) {
        // Tercer bucle anidado
        for (let l = 0; l < dominio.length; l++) {
          // Imprimir la combinación de elementos
          combinaciones += `<p>https://www.${pronombre[i] +
            sustantivo[j] +
            adjetivo[k] +
            dominio[l]}</p>`;
        }
      }
    }
  }
  document.querySelector("#genDominios").innerHTML = combinaciones;
};
