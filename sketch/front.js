<<<<<<< HEAD

//déblocage du scroll
document.getElementsByTagName("body")[0].style.setProperty("overFlow", "auto", "important");

document.querySelector('input').addEventListener('change', (e) => {
  localStorage.setItem('toogleValue', e.currentTarget.checked)
  clear(e)
})

function clear(e) {
  console.log(e.target)
}

//https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
=======
//scroll unblock
document.getElementsByTagName("body")[0].style.setProperty("overFlow", "auto", "important")
document.onload = load()

const toogle = document.querySelector('input')
toogle.addEventListener('click', sendBack)

function load() {
  //récupération de l'état du back localStorage
  let getting = browser.storage.local.get('toogleValue')
  getting.then(function (result) {
    toogle.checked = result.toogleValue
  });
}

async function sendBack() {
  //envoie un message au background script
  let sending = browser.runtime.sendMessage({
    greeting: toogle.checked
  });
}

function verif(e) {
  if (e.target.checked) {
    return clear(e)
  }
}

function clear(e) {
  console.log(e)
}

document.addEventListener('click', verif)

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
>>>>>>> 8c8f29c14e97a0e429d281a6c367a40810635e9d
