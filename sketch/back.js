let toogleV

browser.runtime.onMessage.addListener(value)

function value(bool) {
    toogleV = bool.value
    localStorage.setItem('toogle', bool.value)
}

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(sender)
    console.log(toogleV)
    //sendResponse(true)
})

//https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts