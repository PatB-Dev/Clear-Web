
//déblocage du scroll
document.getElementsByTagName("body")[0].style.setProperty("overFlow", "auto", "important");

document.querySelector('input').addEventListener('change', (e) => {
  localStorage.setItem('toogleValue', e.currentTarget.checked)
})

/*
function clear(e) {
  console.log(toogle);
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