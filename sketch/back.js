browser.runtime.onMessage.addListener(value)

function value(bool) {
    console.log(bool.value)
}