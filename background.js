chrome.action.onClicked.addListener(async (tab) => {
   const url = new URL(tab.url);
   await chrome.storage.local.set({ [url.hostname]: 0 });
   console.log(await chrome.storage.local.get([url.hostname]));
});


