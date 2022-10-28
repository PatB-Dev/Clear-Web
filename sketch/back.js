let toogleV

browser.runtime.onMessage.addListener(value)

function value(bool) {
    toogleV = bool.value
    //TO DO Stockage
    localStorage.setItem('toogle', bool.value)
    browser.tabs.sendMessage(
        1,
        'Yo'
    )
}



//https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts