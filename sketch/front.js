let toogle = document.getElementById("checkbox");

//reception du message du background script au chargement de la page
window.onload = load();
function load() {
  //récupération de l'état du front
  var getting = browser.storage.local.get('toogleValue');
  getting.then(function (result) {
    toogle.checked = result.toogleValue;
  });
}

function sendBack() {
  //envoie un message au background script
  var sending = browser.runtime.sendMessage({
    greeting: toogle.checked
  });
}
toogle.addEventListener("click", sendBack);