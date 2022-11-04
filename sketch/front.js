//déblocage du scroll
document.getElementsByTagName('body')[0].style.setProperty("overFlow", "auto", "important")
document.querySelector('html').removeAttribute('class')

let toogleC = document.getElementById('checkbox')

let valid = null
document.querySelector('input').addEventListener('change', (e) => {
  localStorage.setItem('value', e.target.checked)
})

localStorage.getItem('value') === 'true' ? toogleC.checked = true : false

document.addEventListener('click', (e) => {
  const clearHtml = e.currentTarget.body.id
  if (clearHtml !== 'clear') {
    e.target.style.setProperty('display', 'none')
  }
  //e.target.style.setProperty('display', 'none', 'important')
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