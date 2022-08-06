let toogle = document.getElementById("checkbox");




//reception du message du background script au chargement de la page
window.onload = load();
function load() {
  //récupération de l'état du back localStorage
  var getting = browser.storage.local.get('toogleValue');
  getting.then(function (result) {
    toogle.checked = result.toogleValue;
  });
  if (toogle.checked = true) {
    console.log('clear ok');
    clear();
  }
}

function sendBack() {
  //envoie un message au background script
  var sending = browser.runtime.sendMessage({
    greeting: toogle.checked
  });
}
toogle.addEventListener("click", sendBack);

//execute script nettoyage de page
//TO DO ajout index page local
function clear() {
  document.addEventListener('click', function (e) {
    window.onload = cleaning(e);
  });

  function cleaning(e) {
    //déverrouille de scroll
    document.getElementsByTagName("body")[0].style.setProperty("overFlow", "auto", "important");
    if (e.target.id) {
      //cleaning sur la class au clique
      var id = document.getElementById(e.target.id);
      id.style.setProperty("display", "none", "important");
    }
    else {
      var className = document.getElementsByClassName(e.target.className);
      //cleaning sur la class au clique
      className[0].style.setProperty("display", "none", "important");
    }
  }
}
