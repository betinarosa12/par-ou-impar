let corDeFundo = document.getElementById("fundo");

function iniciar() {
  let numeroImparOuPar = parseInt(Math.random() * 100 + 1);
  if (numeroImparOuPar % 2 === 0) {
    corDeFundo = fundo.style.background = "blue";
  } else {
    corDeFundo = fundo.style.background = "red";
  }
  document.getElementById("span").innerHTML = numeroImparOuPar;
}
