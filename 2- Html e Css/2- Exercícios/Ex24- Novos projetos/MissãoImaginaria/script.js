function mode() {
  const modeIcon = document.querySelector('.modo, .modonoturno');

  modeIcon.classList.toggle('modo');
  modeIcon.classList.toggle('modonoturno');

  trocaImagem();
  ajustarRodape();

  function trocaImagem() {
    const fundo = document.querySelector('.noturno, .sol');
    fundo.classList.toggle('sol');
    fundo.classList.toggle('noturno');
  }

  function ajustarRodape() {
    const rodape = document.querySelector('footer');
    rodape.classList.toggle('footer2');
    rodape.classList.toggle('footer');
    

  }
}