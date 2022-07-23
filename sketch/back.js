

let toogle = null;

console.log("chargement Back");
function handleMessage(request, sender, sendResponse) {
  browser.storage.local.set({ toogleValue: request.greeting });
  storageValue();
  sendResponse({ response: toogle });
}

browser.runtime.onMessage.addListener(handleMessage);

async function storageValue() {
  toogle = await browser.storage.local.get('toogleValue');
  console.log(toogle.toogleValue);
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