//déblocage du scroll
document.getElementsByTagName('body')[0].style.setProperty("overFlow", "auto", "important")
document.querySelector('html').removeAttribute('class')

let toogleC = document.getElementById('checkbox')
var valid

document.querySelector('input').addEventListener('change', (e) => {
  localStorage.setItem('value', e.target.checked)
  chrome.storage.local.set('value', e.target.checked)
})

localStorage.getItem('value') === 'true' ? toogleC.checked = true : false

/*
document.addEventListener('click', (e) => {
  const clearHtml = e.currentTarget.body.id
  if (clearHtml !== 'clear') {
    e.target.style.setProperty('display', 'none', 'important')
  }
})
*/