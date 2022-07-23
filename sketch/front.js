console.log("chargement Front");
let toogle = document.getElementById("checkbox");

function notifyBackgroundPage(e) {
    //envoie un message au background script
    var sending = browser.runtime.sendMessage({
        greeting: toogle.checked
    });
    sending.then(handleResponse, handleError);
}


//reception du message du background script
function handleResponse(message) {
    console.log("Reception Front : ");
    // retour back : "message.response"
}


//affichage erreurs messages entre front et back
function handleError(error) {
    console.log(`Error: ${error}`);
}

toogle.addEventListener("click", notifyBackgroundPage);
