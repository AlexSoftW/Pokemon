// BOTÃO DE RESETAR
function resetarPokemon() {
   idPokemon = 0;
   contador = 50;
   detalhes.innerHTML = "";
   pokemon.innerHTML = "";
   frase_evolution.innerHTML = "<img src='frases/padrao.png'>";
   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   clearInterval(intervalo);
}

// RESETAR DITTO
function resetarDitto() {
   contador = 50;
   clearInterval(intervalo);
}
