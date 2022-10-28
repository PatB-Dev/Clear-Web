
//déblocage du scroll
document.getElementsByTagName("body")[0].style.setProperty("overFlow", "auto", "important");

document.querySelector('input').addEventListener('change', save)

function save(e) {
  browser.runtime.sendMessage({ 'value': e.currentTarget.checked })
}

browser.runtime.onMessage.addListener(
  (data, sender) => {
    console.log(data)
  }
);

//https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage

/*
window.document.addEventListener('click', ouEstLeClick);
function ouEstLeClick(e) {
  //console.log(window.document.activeElement)
  console.log(e.target)
}
*/