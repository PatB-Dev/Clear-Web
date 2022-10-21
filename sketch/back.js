
//sauvegarde de l'état du front
function frontMessage(request, sender, sendResponse) {
  browser.storage.local.set({ toogleValue: request.greeting });
  sendResponse({ response: toogle.toogleValue });
}
browser.runtime.onMessage.addListener(frontMessage);
