
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

let toogle = document.getElementById("checkbox");

function sendBack() {
  //envoie un message au background script
  var sending = browser.runtime.sendMessage({
    greeting: toogle.checked
  });
  sending.then(handleResponse);
}
toogle.addEventListener("click", sendBack);

//reception du message du background script
function handleResponse(message) {
  console.log("Reception Front : " + message.response);
}
//TO DO add event listener on close popup

