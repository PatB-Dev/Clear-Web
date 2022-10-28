let toogleV

browser.runtime.onMessage.addListener(value)

function value(bool) {
    toogleV = bool.value
    localStorage.setItem('toogle', bool.value)
}

document.addEventListener('click', sendFront)

function sendFront() {
    console.log('OK')
    browser.runtime.sendMessage({ 'test': 'test' })
}

//https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts