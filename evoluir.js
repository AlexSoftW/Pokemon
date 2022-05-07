var intervalo = 0;
var pedrasEvolucao = 20;

//BOTÃO DE EVOLUIR
function evoluir(){
   if(idPokemon == 0){
      alert("👷‍♂️: Escolha 1 pokémon antes de evoluir!")
   } else{
      p_frase_pedra.innerHTML = `x${(pedrasEvolucao -= 1)} pedras de evolução`;
      if(pedrasEvolucao < 0){
         alert("👷‍♂️: Suas pedras de evolução acabaram! 😢")
         p_frase_pedra.innerHTML = `x0 pedras de evolução`;
      } else{
         verificar_evolucao();
      }
   }
}

function verificar_evolucao() {
   capturar_poke.disabled = true;

   if (idPokemon == 1) {
      intervalo = setInterval(() => {
         bulbasaur();
      }, 25);
   } else if (idPokemon == 2) {
      intervalo = setInterval(() => {
         charmander();
      }, 25);
   } else if (idPokemon == 3) {
      intervalo = setInterval(() => {
         squirtle();
      }, 25);
   } else if (idPokemon == 4) {
      intervalo = setInterval(() => {
         caterpie();
      }, 25);
   } else if (idPokemon == 5) {
      intervalo = setInterval(() => {
         weedle();
      }, 25);
   } else if (idPokemon == 6) {
      intervalo = setInterval(() => {
         pidgey();
      }, 25);
   } else if (idPokemon == 7) {
      intervalo = setInterval(() => {
         nidoranF();
      }, 25);
   } else if (idPokemon == 8) {
      intervalo = setInterval(() => {
         nidoranM();
      }, 25);
   } else if (idPokemon == 9) {
      intervalo = setInterval(() => {
         eevee();
      }, 25);
      eevee_aleatorio();
   } else if (idPokemon == 10) {
      intervalo = setInterval(() => {
         abra();
      }, 25);
   } else if (idPokemon == 11) {
      intervalo = setInterval(() => {
         machop();
      }, 25);
   } else if (idPokemon == 12) {
      intervalo = setInterval(() => {
         gastly();
      }, 25);
   } else if (idPokemon == 13) {
      intervalo = setInterval(() => {
         dratini();
      }, 25);
   } else if (idPokemon == 14) {
      intervalo = setInterval(() => {
         mew();
      }, 25);
   } else if (idPokemon == 15) {
      intervalo = setInterval(() => {
         ditto();
      }, 25);
      pokemon_aleatorio();
   }
}
