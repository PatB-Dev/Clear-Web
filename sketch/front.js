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

function handleError(error) {
    console.log(`Error: ${error}`);
}

toogle.addEventListener("click", notifyBackgroundPage);


var i, checkboxes = document.querySelectorAll('input[type=checkbox]');

function save() {
    for (i = 0; i < checkboxes.length; i++) {
        localStorage.setItem(checkboxes[i].value, checkboxes[i].checked);
    }
}

function load_() {
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === 'true' ? true : false;
    }
} 