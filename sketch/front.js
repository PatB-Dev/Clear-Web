
//scroll unblock
document.getElementsByTagName("body")[0].style.setProperty("overFlow", "auto", "important")

const toogle = document.querySelector('input')
toogle.addEventListener('click', sendBack)

async function sendBack() {
  //envoie un message au background script
  let sending = browser.runtime.sendMessage({
    greeting: toogle.checked
  });
}

function clear(e) {
  console.log(e.target.checked, e.target)
}

document.addEventListener('click', clear)

/*
function clear(e) {
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

/*
function load() {
  //récupération de l'état du back localStorage
  let getting = browser.storage.local.get('toogleValue')
  getting.then(function (result) {
    toogle.checked = result.toogleValue
  });
}
*/

//reception du message du background script au chargement de la page
//document.onload = load()