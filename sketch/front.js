
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
