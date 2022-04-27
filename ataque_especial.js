const ataque = document.getElementById("atk_mewtwo");
const tela1 = document.querySelector(".div1");
const tela2 = document.querySelector(".div2");
const tela3 = document.querySelector(".div3");
const tela4 = document.querySelector(".div4");

function ataque_especial(){
   frase_evolution.innerHTML = `<img src="./frases/mewtwo/mewtwo_atk.png">`;
   musica_tema.innerHTML = "";

   setTimeout(() => {
      atk_final.innerHTML = `
                           <div class="atk_esquerdo"></div>
                           <div class="atk_meio"></div>
                           <div class="atk_direito">
                              <img src="efeitos/light_atk.gif">
                           </div>
                        `;
  }, 1200);

  setTimeout(() => {   
      info_poke.style.display = "none";
      group_button.style.display = "none";
      atk_final.innerHTML = "";
  }, 2000);

   
  setTimeout(() => {
   pokemon.style.transform = "rotateY(180deg)";
   atk_final.innerHTML = `
                        <div class="atk_esquerdo">
                           <img src="efeitos/light_atk.gif">
                        </div>
                        <div class="atk_meio"></div>
                        <div class="atk_direito"></div>
                     `;
  }, 3200);

   setTimeout(() => {
      bag.style.display = "none";
      logo.style.display = "none";
      treinador.style.display = "none";    
      atk_final.innerHTML = "";
   }, 4000);

   setTimeout(() => {
      pokemon.style.transform = "rotateY(0deg)";
      atk_final.innerHTML = `
                           <div class="atk_esquerdo"></div>
                           <div class="atk_meio"></div>
                           <div class="atk_direito">
                              <img src="efeitos/light_atk.gif">
                           </div>
                        `;
   }, 5200);

   setTimeout(() => {  
      frase_evolution.style.display = "none";
      detalhes.style.display = "none";
      atk_final.innerHTML = "";
   }, 6000);
   

   setTimeout(() => {
      tela1.style.backgroundImage = `url("background/fundo_white.png")`;
      tela2.style.backgroundImage = `url("background/fundo_white.png")`;
      tela3.style.backgroundImage = `url("background/fundo_white.png")`;
      tela4.style.backgroundColor = `white`;    
   }, 8000);

   setTimeout(() => {
      atk_final.innerHTML = `
                           <div class="atk_esquerdo"></div>
                           <div class="atk_meio">
                              <img src="efeitos/light_atk.gif">
                           </div>
                           <div class="atk_direito"></div>
                        `;
   }, 8100);

   setTimeout(() => {
      atk_final.innerHTML = "";
   }, 9000);

   setTimeout(() => {
      audiopoke.innerHTML = `<audio preload="auto" autoplay>
                                 <source src="audio/efeitos/finish.mp3" type="audio/mpeg">
                              </audio>`;
      frase_evolution.style.display = "flex";
      frase_evolution.innerHTML = `<img src="./frases/mewtwo/texto_derrotou_2.png">`;
   }, 15000);
   
}