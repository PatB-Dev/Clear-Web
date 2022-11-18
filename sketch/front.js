//déblocage du scroll
document.getElementsByTagName('html')[0].style.setProperty("overFlow", "auto", "important")
document.getElementsByTagName('body')[0].style.setProperty("overFlow", "auto", "important")

const htmlAttributes = document.querySelector('html')
const toogleC = document.getElementById('checkbox')

/**
 * supprime tous les attributes d'une balise
 * @param {*} element 
 */
const removeAttributes = (element) => {
  while (element.attributes.length > 0) {
    element.removeAttribute(element.attributes[0].name);
  }
}
removeAttributes(htmlAttributes)

//Stockage de l'état du toogle dans l'extension et mise à jour
document.querySelector('input').addEventListener('change', (e) => {
  try {
    localStorage.setItem('value', e.target.checked)
  } catch (error) { }
  const test = new Event('test')
  document.dispatchEvent(test)
})
localStorage.getItem('value') === 'true' ? toogleC.checked = true : false

document.addEventListener('test', (e) => {
  console.log(e)
})

//Suppression de l'élément sur le click (exclusion la page de l'extension)
function clear(e) {
  const htmlBody = e.currentTarget.body.id
  if (htmlBody.length === 0 || htmlBody === null || htmlBody === undefined) {
    e.target.style.setProperty('display', 'none', 'important')
  }
}