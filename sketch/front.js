//déblocage du scroll
document.getElementsByTagName('body')[0].style.setProperty("overFlow", "auto", "important")
document.querySelector('html').removeAttribute('class')

let toogleC = document.getElementById('checkbox')
let valid

async function getValue() {
  return localStorage.getItem('value')
}

document.querySelector('input').addEventListener('change', (e) => {
  localStorage.setItem('value', e.target.checked)
  valid = getValue
})

localStorage.getItem('value') === 'true' ? toogleC.checked = true : false


document.addEventListener('click', (e) => {
  const clearHtml = e.currentTarget.body.id
  if (clearHtml !== 'clear') {
    e.target.style.setProperty('display', 'none', 'important')
  }
})
