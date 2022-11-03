//déblocage du scroll
document.getElementsByTagName("body")[0].style.setProperty("overFlow", "auto", "important")

document.querySelector('input').addEventListener('change', save)
function save(e) {
  localStorage.setItem('value', e.target.checked)
}

let toogle = document.getElementById('checkbox')
localStorage.getItem('value') === 'true' ? toogle.checked = true : false

/*
window.addEventListener('load', restore)
function restore() {
  //localStorage.getItem('value') === 'true' ? toogle.checked = true : false
}
*/

document.addEventListener('click', (e) => {
  console.log(toogle.checked)
  e.target.style.setProperty('display', 'none')
})

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
//https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage