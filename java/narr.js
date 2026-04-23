let utterance;

function lerPagina() {
  speechSynthesis.cancel(); // reseta

  const texto = document.body.innerText;

  utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = "pt-BR";
  utterance.rate = 1;
  utterance.pitch = 1;

  speechSynthesis.speak(utterance);
}

function pausar() {
  speechSynthesis.pause();
}

function continuar() {
  speechSynthesis.resume();
}