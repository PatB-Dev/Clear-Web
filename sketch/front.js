
//scroll unblock
document.getElementsByTagName("body")[0].style.setProperty("overFlow", "auto", "important");

//reception du message du background script au chargement de la page
document.onload = load();

const toogle = document.querySelector('input');
toogle.addEventListener('click', sendBack);

async function load() {
  //récupération de l'état du back localStorage
  var getting = browser.storage.local.get('toogleValue');
  getting.then(function (result) {
    toogle.checked = result.toogleValue;
  });
}

async function sendBack(e) {
  console.log(e)
  //envoie un message au background script
  var sending = browser.runtime.sendMessage({
    greeting: toogle.checked
  });
}




//document.addEventListener("click", sendBack);
/*
function clear(e) {
  console.log(toogle);
  if (e.target.id) {
    //clear sur la class au clique
    var id = document.getElementById(e.target.id);
    id.style.setProperty("display", "none", "important");
  }
  else {
    var className = document.getElementsByClassName(e.target.className);
    //clear sur la class au clique
    className[0].style.setProperty("display", "none", "important");
  }
}
*/