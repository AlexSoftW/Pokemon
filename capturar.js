var chance_captura = 0;

// BOTÃO DE CAPTURAR
function capturar() {
   chance_captura = Math.floor(Math.random() * (9 + 1) + 1);
   p_frase_pokebolas.innerHTML = `x${(pokebolas -= 1)} Pokebolas`;
   pedra_evoluir.disabled = true;
   capturar_poke.disabled = true;
   detalhes.innerHTML = "";
   setTimeout(() => {
      treinador.innerHTML = `<img src="treinador/treinadorEstatico.png">`;
   }, 720);

   treinador.innerHTML = `<img src="treinador/treinador.gif">`;
   frase_evolution.innerHTML = `<img src="frases/padrao.png">`;

   intervalo = setInterval(() => {
      contador += 1;

      if (contador >= 50 && contador < 100) {
         pokemon.innerHTML = `<img src="efeitos/poke.gif">`;
      } else if (contador >= 100 && contador < 130) {
         pokemon.innerHTML = `<img src="efeitos/pokebola1.gif">`;
      } else if (contador >= 130 && contador < 400) {
         pokemon.innerHTML = `<img src="efeitos/pokebola2.gif">`;
         frase_evolution.innerHTML = `<img src="frases/esperando.png">`;
         if (contador == 399 && chance_captura >=1 && chance_captura <= 6) {
            audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/efeitos/capture_sucess.mp3" type="audio/mpeg">
                           </audio>`;
            pokemon.innerHTML = `<img src="efeitos/pokebola3.gif">`;
            frase_evolution.innerHTML = `<img src="frases/capturado.png">`;
         } else if (contador == 399 && chance_captura >= 7 && chance_captura <=10) {
            audiopoke.innerHTML = `<audio preload="auto" autoplay>
                           <source src="audio/efeitos/capture_fail.mp3" type="audio/mpeg">
                           </audio>`;
            pokemon.innerHTML = `<img src="icons/pokeFail.png" width="70px">`;
            frase_evolution.innerHTML = `<img src="frases/failCapturado.png">`;
         }
      } 
   }, 25);
}
