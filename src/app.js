import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let element = document.querySelector(".domain")
  const pronoun = ['the', 'our'];

  const adj = ['great', 'big'];

  const noun = ['jogger', 'racoon'];

  for (let i = 0; i < pronoun.length; i++) {
    //pronoun.forEach(pronoun => {     Lo comento porque se puede hacer tanto con el 1er forEach o con el for 
    adj.forEach(adj => {
      noun.forEach(nouns => {
        const nuevoP = document.createElement("p")
        nuevoP.innerHTML = pronoun[i] + adj + nouns + ".com"
        element.appendChild(nuevoP)
      });
    });
    //});
  };
};
