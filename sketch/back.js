
let toogle = null;

//sauvegarde de l'état du front
function frontMessage(request, sender, sendResponse) {
  browser.storage.local.set({ toogleValue: request.greeting });
  storageValue();
  sendResponse({ response: toogle.toogleValue });
}
browser.runtime.onMessage.addListener(frontMessage);

async function storageValue() {
  toogle = await browser.storage.local.get('toogleValue');
}
/*
document.addEventListener('click', function (e) {
  window.onload = clear(e);
});

function clear(e) {
  //déverrouille de scroll
  document.getElementsByTagName("body")[0].style.setProperty("overFlow", "auto", "important");
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
window.onload = function () {
  alert(document.cookie.split(';').join(';\r\n'));
}
*/