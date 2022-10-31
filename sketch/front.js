//déblocage du scroll
document.getElementsByTagName("body")[0].style.setProperty("overFlow", "auto", "important")

document.querySelector('input').addEventListener('change', save)
function save(e) {
  localStorage.setItem('value', e.target.checked)
}

window.addEventListener('load', restore)
function restore() {
  let toogle = document.getElementById('checkbox')
  localStorage.getItem('value') === 'true' ? toogle.checked = true : false
}

//https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage

/*
document.addEventListener('click', ouEstLeClick);
function ouEstLeClick(e) {
  console.log(window.document.activeElement)
  console.log(e.target)
}
*/