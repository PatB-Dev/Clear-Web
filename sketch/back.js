let toogleV

browser.runtime.onMessage.addListener(value)

function value(bool) {
    toogleV = bool.value
    localStorage.setItem('toogle', bool.value)
}

document.addEventListener('click', test)
function test() {
    console.log('CLIQUE')
}

//https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts