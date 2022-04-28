function escolher_bulbassaur() {
   resetarPokemon();
   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);

   setTimeout(() => {
      pokemon.innerHTML = `<img src="pokemons/bulbasaur.gif" width="90px">`;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/Bulbasaur(Cry).mp3" type="audio/mpeg">
                           </audio>`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                           <img src="icons/poke-tag.png" width="8%">
                           <p>Bulbasaur</p>
                           <img src="icons/grass.png" width="15%">
                           <img src="icons/poison.png" width="16%">
                         </div> `;
   }, 1400);

   pokemon.innerHTML = `<img src="efeitos/jogar_pokebola.gif" width='120px'>`;
   treinador.innerHTML = `<img src="treinador/treinador.gif" width='200px'>`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;
   idPokemon = button_bulbasaur.value;
}

function escolher_charmander() {
   resetarPokemon();
   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);

   setTimeout(() => {
      pokemon.innerHTML = `<img src="pokemons/charmander.gif" width="90px">`;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Charmander(Cry).mp3" type="audio/mpeg">
                         </audio>`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                           <img src="icons/poke-tag.png" width="8%">
                           <p>Charmander</p>
                           <img src="icons/fire.png" width="15%">
                         </div> `;
   }, 1400);

   pokemon.innerHTML = `<img src="efeitos/jogar_pokebola.gif" width='120px'>`;
   treinador.innerHTML = `<img src="treinador/treinador.gif">`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;
   idPokemon = button_charmander.value;
}

function escolher_squirtle() {
   resetarPokemon();
   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);
   setTimeout(() => {
      pokemon.innerHTML = `<img src="pokemons/squirtle.gif" width="90px">`;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Squirtle(Cry).mp3" type="audio/mpeg">
                         </audio>`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                         <img src="icons/poke-tag.png" width="8%">
                         <p>Squirtle</p>
                         <img src="icons/water.png" width="15%">
                       </div> `;
   }, 1400);

   pokemon.innerHTML = `<img src="efeitos/jogar_pokebola.gif" width='120px'>`;
   treinador.innerHTML = `<img src="treinador/treinador.gif">`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;
   idPokemon = button_squirtle.value;
}

function escolher_caterpie() {
   resetarPokemon();
   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);
   setTimeout(() => {
      pokemon.innerHTML = `<img src="pokemons/caterpie.gif" width="90px">`;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Caterpie(Cry).mp3" type="audio/mpeg">
                         </audio>`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                         <img src="icons/poke-tag.png" width="8%">
                         <p>Caterpie</p>
                         <img src="icons/bug.png" width="15%">
                       </div> `;
   }, 1400);

   pokemon.innerHTML = `<img src="efeitos/jogar_pokebola.gif" width='120px'>`;
   treinador.innerHTML = `<img src="treinador/treinador.gif">`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;
   idPokemon = button_caterpie.value;
}

function escolher_weedle() {
   resetarPokemon();
   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);
   setTimeout(() => {
      pokemon.innerHTML = `<img src="pokemons/weedle.gif" width="90px">`;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Weedle(Cry).mp3" type="audio/mpeg">
                         </audio>`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                         <img src="icons/poke-tag.png" width="8%">
                         <p>Weedle</p>
                         <img src="icons/bug.png" width="15%">
                         <img src="icons/poison.png" width="15%">
                       </div> `;
   }, 1400);

   pokemon.innerHTML = `<img src="efeitos/jogar_pokebola.gif" width='120px'>`;
   treinador.innerHTML = `<img src="treinador/treinador.gif">`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;
   idPokemon = button_weedle.value;
}

function escolher_pidgey() {
   resetarPokemon();
   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);
   setTimeout(() => {
      pokemon.innerHTML = `<img src="pokemons/pidgey.gif" width="90px">`;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Pidgey(Cry).mp3" type="audio/mpeg">
                         </audio>`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                         <img src="icons/poke-tag.png" width="8%">
                         <p>Pidgey</p>
                         <img src="icons/normal.png" width="15%">
                         <img src="icons/flying.png" width="15%">
                       </div> `;
   }, 1400);

   pokemon.innerHTML = `<img src="efeitos/jogar_pokebola.gif" width='120px'>`;
   treinador.innerHTML = `<img src="treinador/treinador.gif">`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;
   idPokemon = button_pidgey.value;
}

function escolher_nidoranF() {
   resetarPokemon();
   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);
   setTimeout(() => {
      pokemon.innerHTML = `<img src="pokemons/nidoranF.gif" width="90px">`;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/NidoranF(Cry).mp3" type="audio/mpeg">
                         </audio>`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                         <img src="icons/poke-tag.png" width="8%">
                         <p>Nidoran♀️</p>
                         <img src="icons/poison.png" width="15%">
                       </div> `;
   }, 1400);

   pokemon.innerHTML = `<img src="efeitos/jogar_pokebola.gif" width='120px'>`;
   treinador.innerHTML = `<img src="treinador/treinador.gif">`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;
   idPokemon = button_nidoran_f.value;
}

function escolher_nidoranM() {
   resetarPokemon();
   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);
   setTimeout(() => {
      pokemon.innerHTML = `<img src="pokemons/nidoranM.gif" width="90px">`;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/NidoranM(Cry).mp3" type="audio/mpeg">
                         </audio>`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                         <img src="icons/poke-tag.png" width="8%">
                         <p>Nidoran♂️</p>
                         <img src="icons/poison.png" width="15%">
                       </div> `;
   }, 1400);

   pokemon.innerHTML = `<img src="efeitos/jogar_pokebola.gif" width='120px'>`;
   treinador.innerHTML = `<img src="treinador/treinador.gif">`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;
   idPokemon = button_nidoran_m.value;
}

//EEVEE ALEATORIO(Excluivo do eevee)
var evolucao_aleatoria = 0;
function eevee_aleatorio(){
   evolucao_aleatoria = Math.floor(Math.random() * (2 + 1) + 1);
}

function escolher_eevee() {
   resetarPokemon();
   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);
   setTimeout(() => {
      pokemon.innerHTML = `<img src="pokemons/eevee.gif" width="90px">`;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Eevee(Cry).mp3" type="audio/mpeg">
                         </audio>`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                         <img src="icons/poke-tag.png" width="8%">
                         <p>Eevee</p>
                         <img src="icons/normal.png" width="15%">
                       </div> `;
   }, 1400);

   pokemon.innerHTML = `<img src="efeitos/jogar_pokebola.gif" width='120px'>`;
   treinador.innerHTML = `<img src="treinador/treinador.gif">`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;
   idPokemon = button_eevee.value;
}

function escolher_abra() {
   resetarPokemon();
   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);
   setTimeout(() => {
      pokemon.innerHTML = `<img src="pokemons/abra.gif" width="90px">`;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Abra(Cry).mp3" type="audio/mpeg">
                         </audio>`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                         <img src="icons/poke-tag.png" width="8%">
                         <p>Abra</p>
                         <img src="icons/psychc.png" width="15%">
                       </div> `;
   }, 1400);

   pokemon.innerHTML = `<img src="efeitos/jogar_pokebola.gif" width='120px'>`;
   treinador.innerHTML = `<img src="treinador/treinador.gif">`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;
   idPokemon = button_abra.value;
}

function escolher_machop() {
   resetarPokemon();
   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);
   setTimeout(() => {
      pokemon.innerHTML = `<img src="pokemons/machop.gif" width="90px">`;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Machop(Cry).mp3" type="audio/mpeg">
                         </audio>`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                         <img src="icons/poke-tag.png" width="8%">
                         <p>Machop</p>
                         <img src="icons/fight.png" width="15%">
                       </div> `;
   }, 1400);

   pokemon.innerHTML = `<img src="efeitos/jogar_pokebola.gif" width='120px'>`;
   treinador.innerHTML = `<img src="treinador/treinador.gif">`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;
   idPokemon = button_machop.value;
}

function escolher_gastly() {
   resetarPokemon();
   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);
   setTimeout(() => {
      pokemon.innerHTML = `<img src="pokemons/gastly.gif" width="90px">`;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Gastly(Cry).mp3" type="audio/mpeg">
                         </audio>`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                         <img src="icons/poke-tag.png" width="8%">
                         <p>Gastly</p>
                         <img src="icons/ghost.png" width="15%">
                         <img src="icons/poison.png" width="15%">
                       </div> `;
   }, 1400);

   pokemon.innerHTML = `<img src="efeitos/jogar_pokebola.gif" width='120px'>`;
   treinador.innerHTML = `<img src="treinador/treinador.gif">`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;
   idPokemon = button_gastly.value;
}

function escolher_dratini() {
   resetarPokemon();
   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);
   setTimeout(() => {
      pokemon.innerHTML = `<img src="pokemons/dratini.gif" width="90px">`;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Dratini(Cry).mp3" type="audio/mpeg">
                         </audio>`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                         <img src="icons/poke-tag.png" width="8%">
                         <p>Dratini</p>
                         <img src="icons/dragon.png" width="15%">
                       </div> `;
   }, 1400);

   pokemon.innerHTML = `<img src="efeitos/jogar_pokebola.gif" width='120px'>`;
   treinador.innerHTML = `<img src="treinador/treinador.gif">`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;
   idPokemon = button_dratini.value;
}

function escolher_mew() {
   resetarPokemon();
   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);
   setTimeout(() => {
      pokemon.innerHTML = `<img src="pokemons/mew.gif" width="90px">`;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Mew(Cry).mp3" type="audio/mpeg">
                         </audio>`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                         <img src="icons/poke-tag.png" width="8%">
                         <p>Mew</p>
                         <img src="icons/psychc.png" width="15%">
                       </div> `;
   }, 1400);

   pokemon.innerHTML = `<img src="efeitos/jogar_pokebola.gif" width='120px'>`;
   treinador.innerHTML = `<img src="treinador/treinador.gif">`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;
   idPokemon = button_mew.value;
}

//POKEMON ALEATORIO(Excluivo do DITTO)
function pokemon_aleatorio() {
   idPokemon = Math.floor(Math.random() * (12 + 1) + 1);
}

function escolher_ditto() {
   resetarPokemon();

   pedra_evoluir.disabled = false;
   capturar_poke.disabled = false;
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);
   setTimeout(() => {
      pokemon.innerHTML = `<img src="pokemons/ditto.gif" width="90px">`;
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                         <source src="audio/Ditto(Cry).mp3" type="audio/mpeg">
                         </audio>`;
      detalhes.innerHTML = `<div class="detalhe_pokemon">
                         <img src="icons/poke-tag.png" width="8%">
                         <p>Ditto</p>
                         <img src="icons/normal.png" width="15%">
                       </div> `;
   }, 1400);

   pokemon.innerHTML = `<img src="efeitos/jogar_pokebola.gif" width='120px'>`;
   treinador.innerHTML = `<img src="treinador/treinador.gif">`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;
   idPokemon = button_ditto.value;
}
