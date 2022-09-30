
//sauvegarde de l'état du front
function frontMessage(request, sender, sendResponse) {
  browser.storage.local.set({ toogleValue: request.greeting });
  sendResponse({ response: toogle.toogleValue });
}
browser.runtime.onMessage.addListener(frontMessage);

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
window.onload = function () {
  alert(document.cookie.split(';').join(';\r\n'));
}
*/