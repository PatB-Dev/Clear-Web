
let toogle = document.getElementById("checkbox");

function sendBack() {
    //envoie un message au background script
    var sending = browser.runtime.sendMessage({
        greeting: toogle.checked
    });
}
toogle.addEventListener("click", sendBack);

//reception du message du background script
function handleResponse(message) {
    console.log("Reception Front : ");
    // retour back : "message.response"
}
//TO DO add event listener on close popup