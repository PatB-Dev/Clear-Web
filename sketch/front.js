
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
    //console.log("Reception Front : " + message.response);
}
//TO DO add event listener on close popup