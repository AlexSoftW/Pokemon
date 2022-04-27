//POKEMON 1
function bulbasaur() {
   contador += 1;
   pedra_evoluir.disabled = true;
   if (contador >= 50 && contador < 90) {
      pokemon.innerHTML = `<img src="efeitos/evolve.gif" width='95px'>`;
   } else if (contador >= 90 && contador < 160) {
      pokemon.innerHTML = `<img src="pokemons/bulbasaur.gif" width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/evoluindo.png">`;
   } else if (contador >= 160 && contador < 190) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 190 && contador < 270) {
      pokemon.innerHTML = `<img src='pokemons/yvisaur.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/ivysaur.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                               <img src="icons/poke-tag.png" width="8%">
                               <p>Ivysaur</p>
                               <img src="icons/grass.png" width="15%">
                               <img src="icons/poison.png" width="16%">
                           </div> `;
   } else if (contador >= 270 && contador < 300) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 300 && contador < 380) {
      pokemon.innerHTML = `<img src='pokemons/venossauro.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/venusaur.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                             <img src="icons/poke-tag.png" width="8%">
                             <p>Venusaur</p>
                             <img src="icons/grass.png" width="15%">
                             <img src="icons/poison.png" width="16%">
                           </div> `;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                             <source src="audio/Venusaur(Cry).mp3" type="audio/mpeg">
                           </audio>`;
   }
}

//POKEMON 2
function charmander() {
   contador += 1;
   pedra_evoluir.disabled = true;
   if (contador >= 50 && contador < 90) {
      pokemon.innerHTML = `<img src="efeitos/evolve.gif" width='95px'>`;
   } else if (contador >= 90 && contador < 160) {
      pokemon.innerHTML = `<img src="pokemons/charmander.gif" width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/evoluindo.png">`;
   } else if (contador >= 160 && contador < 190) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 190 && contador < 270) {
      pokemon.innerHTML = `<img src='pokemons/charmeleon.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/charmeleon.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                               <img src="icons/poke-tag.png" width="8%">
                               <p>Charmeleon</p>
                               <img src="icons/fire.png" width="15%">
                             </div> `;
   } else if (contador >= 270 && contador < 300) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 300 && contador < 380) {
      pokemon.innerHTML = `<img src='pokemons/charizard.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/charizard.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                             <img src="icons/poke-tag.png" width="8%">
                             <p>Charizard</p>
                             <img src="icons/fire.png" width="15%">
                             <img src="icons/flying.png" width="15%">
                           </div> `;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/Charizard(Cry).mp3" type="audio/mpeg">
                           </audio>`;
   }
}

//POKEMON 3
function squirtle() {
   contador += 1;
   pedra_evoluir.disabled = true;
   if (contador >= 50 && contador < 90) {
      pokemon.innerHTML = `<img src="efeitos/evolve.gif" width='95px'>`;
   } else if (contador >= 90 && contador < 160) {
      pokemon.innerHTML = `<img src="pokemons/squirtle.gif" width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/evoluindo.png">`;
   } else if (contador >= 160 && contador < 190) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 190 && contador < 270) {
      pokemon.innerHTML = `<img src='pokemons/wartortle.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/wartortle.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                               <img src="icons/poke-tag.png" width="8%">
                               <p>Wartortle</p>
                               <img src="icons/water.png" width="15%">
                             </div> `;
   } else if (contador >= 270 && contador < 300) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 300 && contador < 380) {
      pokemon.innerHTML = `<img src='pokemons/blastoise.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/blastoise.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                             <img src="icons/poke-tag.png" width="8%">
                             <p>Blastoise</p>
                             <img src="icons/water.png" width="15%">
                           </div> `;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/Blastoise(Cry).mp3" type="audio/mpeg">
                           </audio>`;
   }
}

//POKEMON 4
function caterpie() {
   contador += 1;
   pedra_evoluir.disabled = true;
   if (contador >= 50 && contador < 90) {
      pokemon.innerHTML = `<img src="efeitos/evolve.gif" width='95px'>`;
   } else if (contador >= 90 && contador < 160) {
      pokemon.innerHTML = `<img src="pokemons/caterpie.gif" width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/evoluindo.png">`;
   } else if (contador >= 160 && contador < 190) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 190 && contador < 270) {
      pokemon.innerHTML = `<img src='pokemons/metapod.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/metapod.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                               <img src="icons/poke-tag.png" width="8%">
                               <p>Metapod</p>
                               <img src="icons/bug.png" width="15%">
                             </div> `;
   } else if (contador >= 270 && contador < 300) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 300 && contador < 380) {
      pokemon.innerHTML = `<img src='pokemons/butterfree.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/butterfree.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                             <img src="icons/poke-tag.png" width="8%">
                             <p>Butterfree</p>
                             <img src="icons/bug.png" width="15%">
                             <img src="icons/flying.png" width="15%">
                           </div> `;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/Butterfree(Cry).mp3" type="audio/mpeg">
                           </audio>`;
   }
}

//POKEMON 5
function weedle() {
   contador += 1;
   pedra_evoluir.disabled = true;
   if (contador >= 50 && contador < 90) {
      pokemon.innerHTML = `<img src="efeitos/evolve.gif" width='95px'>`;
   } else if (contador >= 90 && contador < 160) {
      pokemon.innerHTML = `<img src="pokemons/weedle.gif" width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/evoluindo.png">`;
   } else if (contador >= 160 && contador < 190) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 190 && contador < 270) {
      pokemon.innerHTML = `<img src='pokemons/kakuna.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/kakuna.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                               <img src="icons/poke-tag.png" width="8%">
                               <p>Kakuna</p>
                               <img src="icons/bug.png" width="15%">
                               <img src="icons/poison.png" width="15%">
                             </div> `;
   } else if (contador >= 270 && contador < 300) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 300 && contador < 380) {
      pokemon.innerHTML = `<img src='pokemons/beedrill.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/beedrill.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                             <img src="icons/poke-tag.png" width="8%">
                             <p>Beedrill</p>
                             <img src="icons/bug.png" width="15%">
                             <img src="icons/poison.png" width="15%">
                           </div> `;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/Beedrill(Cry).mp3" type="audio/mpeg">
                           </audio>`;
   }
}

//POKEMON 6
function pidgey() {
   contador += 1;
   pedra_evoluir.disabled = true;
   if (contador >= 50 && contador < 90) {
      pokemon.innerHTML = `<img src="efeitos/evolve.gif" width='95px'>`;
   } else if (contador >= 90 && contador < 160) {
      pokemon.innerHTML = `<img src="pokemons/pidgey.gif" width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/evoluindo.png">`;
   } else if (contador >= 160 && contador < 190) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 190 && contador < 270) {
      pokemon.innerHTML = `<img src='pokemons/pidgeotto.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/pidgeotto.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                               <img src="icons/poke-tag.png" width="8%">
                               <p>Pidgeotto</p>
                               <img src="icons/normal.png" width="15%">
                               <img src="icons/flying.png" width="15%">
                             </div> `;
   } else if (contador >= 270 && contador < 300) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 300 && contador < 380) {
      pokemon.innerHTML = `<img src='pokemons/pidgeot.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/pidgeot.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                             <img src="icons/poke-tag.png" width="8%">
                             <p>Pidgeot</p>
                             <img src="icons/normal.png" width="15%">
                             <img src="icons/flying.png" width="15%">
                           </div> `;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/Pidgeot(Cry).mp3" type="audio/mpeg">
                           </audio>`;
   }
}

//POKEMON 7
function nidoranF() {
   contador += 1;
   pedra_evoluir.disabled = true;
   if (contador >= 50 && contador < 90) {
      pokemon.innerHTML = `<img src="efeitos/evolve.gif" width='95px'>`;
   } else if (contador >= 90 && contador < 160) {
      pokemon.innerHTML = `<img src="pokemons/nidoranF.gif" width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/evoluindo.png">`;
   } else if (contador >= 160 && contador < 190) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 190 && contador < 270) {
      pokemon.innerHTML = `<img src='pokemons/nidorina.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/nidorina.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                               <img src="icons/poke-tag.png" width="8%">
                               <p>Nidorina</p>
                               <img src="icons/poison.png" width="15%">
                             </div> `;
   } else if (contador >= 270 && contador < 300) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 300 && contador < 380) {
      pokemon.innerHTML = `<img src='pokemons/nidoqueen.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/nidoqueen.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                             <img src="icons/poke-tag.png" width="8%">
                             <p>Nidoqueen</p>
                             <img src="icons/poison.png" width="15%">
                             <img src="icons/ground.png" width="15%">
                           </div> `;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/Nidoqueen(Cry).mp3" type="audio/mpeg">
                           </audio>`;
   }
}

//POKEMON 8
function nidoranM() {
   contador += 1;
   pedra_evoluir.disabled = true;
   if (contador >= 50 && contador < 90) {
      pokemon.innerHTML = `<img src="efeitos/evolve.gif" width='95px'>`;
   } else if (contador >= 90 && contador < 160) {
      pokemon.innerHTML = `<img src="pokemons/nidoranM.gif" width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/evoluindo.png">`;
   } else if (contador >= 160 && contador < 190) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 190 && contador < 270) {
      pokemon.innerHTML = `<img src='pokemons/nidorino.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/nidorino.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                               <img src="icons/poke-tag.png" width="8%">
                               <p>Nidorino</p>
                               <img src="icons/poison.png" width="15%">
                             </div> `;
   } else if (contador >= 270 && contador < 300) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 300 && contador < 380) {
      pokemon.innerHTML = `<img src='pokemons/nidoking.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/nidoking.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                             <img src="icons/poke-tag.png" width="8%">
                             <p>Nidoking</p>
                             <img src="icons/poison.png" width="15%">
                             <img src="icons/ground.png" width="15%">
                           </div> `;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/Nidoking(Cry).mp3" type="audio/mpeg">
                           </audio>`;
   }
}

//POKEMON 9
function eevee() {
   contador += 1;
   pedra_evoluir.disabled = true;
   
   if (contador >= 50 && contador < 90) {
      pokemon.innerHTML = `<img src="efeitos/evolve.gif" width='95px'>`;
   }  else if (contador >= 90 && contador < 160) {
      pokemon.innerHTML = `<img src="pokemons/eevee.gif" width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/evoluindo.png">`;
   } else if (contador >= 160 && contador < 190) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if(contador >= 190 && contador < 270){
      if(evolucao_aleatoria == 1){
         pokemon.innerHTML = `<img src='pokemons/vaporeon.gif' width='${contador}px'>`;
         frase_evolution.innerHTML = `<img src="frases/vaporeon.png">`;
         detalhes.innerHTML = `<div class="detalhe_pokemon">
                              <img src="icons/poke-tag.png" width="8%">
                              <p>Vaporeon</p>
                              <img src="icons/water.png" width="15%">
                              </div> `;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                              <source src="audio/Vaporeon(Cry).mp3" type="audio/mpeg">
                              </audio>`;
      } else if(evolucao_aleatoria == 2){
         pokemon.innerHTML = `<img src='pokemons/jolteon.gif' width='${contador}px'>`;
         frase_evolution.innerHTML = `<img src="frases/jolteon.png">`;
         detalhes.innerHTML = `<div class="detalhe_pokemon">
                              <img src="icons/poke-tag.png" width="8%">
                              <p>Jolteon</p>
                              <img src="icons/electr.png" width="15%">
                              </div> `;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                              <source src="audio/Jolteon(Cry).mp3" type="audio/mpeg">
                              </audio>`;
      } else if(evolucao_aleatoria == 3){
         pokemon.innerHTML = `<img src='pokemons/flareon.gif' width='${contador}px'>`;
         frase_evolution.innerHTML = `<img src="frases/flareon.png">`;
         detalhes.innerHTML = `<div class="detalhe_pokemon">
                              <img src="icons/poke-tag.png" width="8%">
                              <p>Flareon</p>
                              <img src="icons/fire.png" width="15%">
                              </div> `;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                              <source src="audio/Flareon(Cry).mp3" type="audio/mpeg">
                              </audio>`;
      }
   }
}

//POKEMON 10
function abra() {
   contador += 1;
   pedra_evoluir.disabled = true;
   if (contador >= 50 && contador < 90) {
      pokemon.innerHTML = `<img src="efeitos/evolve.gif" width='95px'>`;
   } else if (contador >= 90 && contador < 160) {
      pokemon.innerHTML = `<img src="pokemons/abra.gif" width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/evoluindo.png">`;
   } else if (contador >= 160 && contador < 190) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 190 && contador < 270) {
      pokemon.innerHTML = `<img src='pokemons/kadabra.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/kadabra.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                               <img src="icons/poke-tag.png" width="8%">
                               <p>Kadabra</p>
                               <img src="icons/psychc.png" width="15%">
                             </div> `;
   } else if (contador >= 270 && contador < 300) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 300 && contador < 380) {
      pokemon.innerHTML = `<img src='pokemons/alakazam.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/alakazam.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                             <img src="icons/poke-tag.png" width="8%">
                             <p>Alakazam</p>
                             <img src="icons/psychc.png" width="15%">
                           </div> `;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/Alakazam(Cry).mp3" type="audio/mpeg">
                           </audio>`;
   }
}

//POKEMON 11
function machop() {
   contador += 1;
   pedra_evoluir.disabled = true;
   if (contador >= 50 && contador < 90) {
      pokemon.innerHTML = `<img src="efeitos/evolve.gif" width='95px'>`;
   } else if (contador >= 90 && contador < 160) {
      pokemon.innerHTML = `<img src="pokemons/machop.gif" width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/evoluindo.png">`;
   } else if (contador >= 160 && contador < 190) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 190 && contador < 270) {
      pokemon.innerHTML = `<img src='pokemons/machoke.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/machoke.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                               <img src="icons/poke-tag.png" width="8%">
                               <p>Machoke</p>
                               <img src="icons/fight.png" width="15%">
                             </div> `;
   } else if (contador >= 270 && contador < 300) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 300 && contador < 380) {
      pokemon.innerHTML = `<img src='pokemons/machamp.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/machamp.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                             <img src="icons/poke-tag.png" width="8%">
                             <p>Machamp</p>
                             <img src="icons/fight.png" width="15%">
                           </div> `;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/Machamp(Cry).mp3" type="audio/mpeg">
                           </audio>`;
   }
}

//POKEMON 12
function gastly() {
   contador += 1;
   pedra_evoluir.disabled = true;
   if (contador >= 50 && contador < 90) {
      pokemon.innerHTML = `<img src="efeitos/evolve.gif" width='95px'>`;
   } else if (contador >= 90 && contador < 160) {
      pokemon.innerHTML = `<img src="pokemons/gastly.gif" width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/evoluindo.png">`;
   } else if (contador >= 160 && contador < 190) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 190 && contador < 270) {
      pokemon.innerHTML = `<img src='pokemons/haunter.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/haunter.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                               <img src="icons/poke-tag.png" width="8%">
                               <p>Haunter</p>
                               <img src="icons/ghost.png" width="15%">
                               <img src="icons/poison.png" width="15%">
                             </div> `;
   } else if (contador >= 270 && contador < 300) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 300 && contador < 380) {
      pokemon.innerHTML = `<img src='pokemons/gengar.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/gengar.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                             <img src="icons/poke-tag.png" width="8%">
                             <p>Gengar</p>
                             <img src="icons/ghost.png" width="15%">
                             <img src="icons/poison.png" width="15%">
                           </div> `;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/Gengar(Cry).mp3" type="audio/mpeg">
                           </audio>`;
   }
}

//POKEMON 13
function dratini() {
   contador += 1;
   pedra_evoluir.disabled = true;
   if (contador >= 50 && contador < 90) {
      pokemon.innerHTML = `<img src="efeitos/evolve.gif" width='95px'>`;
   } else if (contador >= 90 && contador < 160) {
      pokemon.innerHTML = `<img src="pokemons/dratini.gif" width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/evoluindo.png">`;
   } else if (contador >= 160 && contador < 190) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 190 && contador < 270) {
      pokemon.innerHTML = `<img src='pokemons/dragonair.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/dragonair.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                               <img src="icons/poke-tag.png" width="8%">
                               <p>Dragonair</p>
                               <img src="icons/dragon.png" width="15%">
                             </div> `;
   } else if (contador >= 270 && contador < 300) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 300 && contador < 380) {
      pokemon.innerHTML = `<img src='pokemons/dragonite.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/dragonite.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                             <img src="icons/poke-tag.png" width="8%">
                             <p>Dragonite</p>
                             <img src="icons/dragon.png" width="15%">
                             <img src="icons/flying.png" width="15%">
                           </div> `;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/Dragonite(Cry).mp3" type="audio/mpeg">
                           </audio>`;
   }
}

//POKEMON 14
function mew() {
   contador += 1;
   pedra_evoluir.disabled = true;
   if (contador >= 50 && contador < 90) {
      pokemon.innerHTML = `<img src="efeitos/evolve.gif" width='95px'>`;
   } else if (contador >= 90 && contador < 220) {
      pokemon.innerHTML = `<img src="pokemons/mew.gif" width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/evoluindo.png">`;
   } else if (contador >= 220 && contador < 250) {
      pokemon.innerHTML = `<img src="efeitos/evoluir.gif" width='${contador}px'>`;
   } else if (contador >= 250 && contador < 330) {
      pokemon.innerHTML = `<img src='pokemons/mewtwo.gif' width='${contador}px'>`;
      frase_evolution.innerHTML = `<img src="frases/mewtwo.png">`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                             <img src="icons/poke-tag.png" width="8%">
                             <p>Mewtwo</p>
                             <img src="icons/psychc.png" width="15%">
                           </div> `;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/Mewtwo(Cry).mp3" type="audio/mpeg">
                           </audio>`;
   } else if (contador == 330) {
      pokemon.style.animation = "shake 0.82s cubic-bezier(.36,.07,.19,.97) both";
      frase_evolution.innerHTML += `<div id="blob">
                              <button id="atk_mewtwo" onclick="ataque_especial()">Raio Psíquico</button>
                           </div>`;
   }
}

//POKEMON 15
function ditto() {
   contador += 1;
   pedra_evoluir.disabled = true;

   if (contador >= 50 && contador < 90) {
      pokemon.innerHTML = `<img src="efeitos/evolve.gif" width='95px'>`;
   } else if (contador >= 90 && contador < 100) {
      pokemon.innerHTML = `<img src="pokemons/bulbasaur.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 100 && contador < 120) {
      pokemon.innerHTML = `<img src="efeitos/ditto_transform.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 120 && contador < 130) {
      pokemon.innerHTML = `<img src="pokemons/charmander.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 130 && contador < 150) {
      pokemon.innerHTML = `<img src="efeitos/ditto_transform.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 150 && contador < 160) {
      pokemon.innerHTML = `<img src="pokemons/squirtle.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 160 && contador < 180) {
      pokemon.innerHTML = `<img src="efeitos/ditto_transform.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 180 && contador < 190) {
      pokemon.innerHTML = `<img src="pokemons/caterpie.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 190 && contador < 210) {
      pokemon.innerHTML = `<img src="efeitos/ditto_transform.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 210 && contador < 220) {
      pokemon.innerHTML = `<img src="pokemons/weedle.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 220 && contador < 240) {
      pokemon.innerHTML = `<img src="efeitos/ditto_transform.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 240 && contador < 250) {
      pokemon.innerHTML = `<img src="pokemons/pidgey.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 250 && contador < 270) {
      pokemon.innerHTML = `<img src="efeitos/ditto_transform.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 270 && contador < 280) {
      pokemon.innerHTML = `<img src="pokemons/nidoranF.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 280 && contador < 300) {
      pokemon.innerHTML = `<img src="efeitos/ditto_transform.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 300 && contador < 310) {
      pokemon.innerHTML = `<img src="pokemons/nidoranM.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 310 && contador < 330) {
      pokemon.innerHTML = `<img src="efeitos/ditto_transform.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 330 && contador < 340) {
      pokemon.innerHTML = `<img src="pokemons/eevee.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 330 && contador < 350) {
      pokemon.innerHTML = `<img src="efeitos/ditto_transform.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 350 && contador < 360) {
      pokemon.innerHTML = `<img src="pokemons/abra.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 360 && contador < 380) {
      pokemon.innerHTML = `<img src="efeitos/ditto_transform.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 380 && contador < 390) {
      pokemon.innerHTML = `<img src="pokemons/machop.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 390 && contador < 410) {
      pokemon.innerHTML = `<img src="efeitos/ditto_transform.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 410 && contador < 420) {
      pokemon.innerHTML = `<img src="pokemons/gastly.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 420 && contador < 440) {
      pokemon.innerHTML = `<img src="efeitos/ditto_transform.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 440 && contador < 450) {
      pokemon.innerHTML = `<img src="pokemons/dratini.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador >= 450 && contador < 470) {
      pokemon.innerHTML = `<img src="efeitos/ditto_transform.gif" width='95px'>`;
      frase_evolution.innerHTML = `<img src="frases/ditto.png">`;
   } else if (contador > 470) {
      audiopoke.innerHTML = "";
      if (idPokemon == 1) {
         pokemon.innerHTML = `<img src="pokemons/bulbasaur.gif" width='95px'>`;
         frase_evolution.innerHTML = `<img src="frases/ditto/ditto-bulbasaur.png">`;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/Bulbasaur(Cry).mp3" type="audio/mpeg">
                           </audio>`;
         resetarDitto();
         capturar_poke.disabled = false;
      } else if (idPokemon == 2) {
         pokemon.innerHTML = `<img src="pokemons/charmander.gif" width='95px'>`;
         frase_evolution.innerHTML = `<img src="frases/ditto/ditto-charmander.png">`;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/Charmander(Cry).mp3" type="audio/mpeg">
                           </audio>`;
         resetarDitto();
         capturar_poke.disabled = false;
      } else if (idPokemon == 3) {
         pokemon.innerHTML = `<img src="pokemons/squirtle.gif" width='95px'>`;
         frase_evolution.innerHTML = `<img src="frases/ditto/ditto-squirtle.png">`;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Squirtle(Cry).mp3" type="audio/mpeg">
                         </audio>`;
         resetarDitto();
         capturar_poke.disabled = false;
      } else if (idPokemon == 4) {
         pokemon.innerHTML = `<img src="pokemons/caterpie.gif" width='95px'>`;
         frase_evolution.innerHTML = `<img src="frases/ditto/ditto-caterpie.png">`;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Caterpie(Cry).mp3" type="audio/mpeg">
                         </audio>`;
         resetarDitto();
         capturar_poke.disabled = false;
      } else if (idPokemon == 5) {
         pokemon.innerHTML = `<img src="pokemons/weedle.gif" width='95px'>`;
         frase_evolution.innerHTML = `<img src="frases/ditto/ditto-weedle.png">`;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Weedle(Cry).mp3" type="audio/mpeg">
                         </audio>`;
         resetarDitto();
         capturar_poke.disabled = false;
      } else if (idPokemon == 6) {
         pokemon.innerHTML = `<img src="pokemons/pidgey.gif" width='95px'>`;
         frase_evolution.innerHTML = `<img src="frases/ditto/ditto-pidgey.png">`;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Pidgey(Cry).mp3" type="audio/mpeg">
                         </audio>`;
         resetarDitto();
         capturar_poke.disabled = false;
      } else if (idPokemon == 7) {
         pokemon.innerHTML = `<img src="pokemons/nidoranF.gif" width='95px'>`;
         frase_evolution.innerHTML = `<img src="frases/ditto/ditto-nidoranF.png">`;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/NidoranF(Cry).mp3" type="audio/mpeg">
                         </audio>`;
         resetarDitto();
         capturar_poke.disabled = false;
      } else if (idPokemon == 8) {
         pokemon.innerHTML = `<img src="pokemons/nidoranM.gif" width='95px'>`;
         frase_evolution.innerHTML = `<img src="frases/ditto/ditto-nidoranM.png">`;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/NidoranM(Cry).mp3" type="audio/mpeg">
                         </audio>`;
         resetarDitto();
         capturar_poke.disabled = false;
      } else if (idPokemon == 9) {
         pokemon.innerHTML = `<img src="pokemons/eevee.gif" width='95px'>`;
         frase_evolution.innerHTML = `<img src="frases/ditto/ditto-eevee.png">`;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Eevee(Cry).mp3" type="audio/mpeg">
                         </audio>`;
         resetarDitto();
         capturar_poke.disabled = false;
      } else if (idPokemon == 10) {
         pokemon.innerHTML = `<img src="pokemons/abra.gif" width='95px'>`;
         frase_evolution.innerHTML = `<img src="frases/ditto/ditto-abra.png">`;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Abra(Cry).mp3" type="audio/mpeg">
                         </audio>`;
         resetarDitto();
         capturar_poke.disabled = false;
      } else if (idPokemon == 11) {
         pokemon.innerHTML = `<img src="pokemons/machop.gif" width='95px'>`;
         frase_evolution.innerHTML = `<img src="frases/ditto/ditto-machop.png">`;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Machop(Cry).mp3" type="audio/mpeg">
                         </audio>`;
         resetarDitto();
         capturar_poke.disabled = false;
      } else if (idPokemon == 12) {
         pokemon.innerHTML = `<img src="pokemons/gastly.gif" width='95px'>`;
         frase_evolution.innerHTML = `<img src="frases/ditto/ditto-gastly.png">`;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Gastly(Cry).mp3" type="audio/mpeg">
                         </audio>`;
         resetarDitto();
         capturar_poke.disabled = false;
      } else if (idPokemon == 13) {
         pokemon.innerHTML = `<img src="pokemons/dratini.gif" width='95px'>`;
         frase_evolution.innerHTML = `<img src="frases/ditto/ditto-dratini.png">`;
         audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Dratini(Cry).mp3" type="audio/mpeg">
                         </audio>`;
         resetarDitto();
         capturar_poke.disabled = false;
      }
   }
}
