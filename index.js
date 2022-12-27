// 1- Create local storage

link1 = { "www.youtube.com": 3 };

chrome.storage.sync.set(link1);

// 2- find current active tab from current focused window

// get tab id:
// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//    var tab = tabs[0];
//    console.log(tab.id);
// });

async function currentURL() {
   const windowId = (await chrome.windows.getCurrent()).id;
   const [tab] = await chrome.tabs.query({ active: true, windowId });
   if (tab) {
      return new URL(tab.url).hostname;
   } else {
      return "No tab found";
   }
}

// new URL(tab.url).hostname;

// 3- check if current host name is part of storage
// if so return the countdown number (which is the correspdonding value of local storage key)

let countdownValue = currentURL().then((url) => {
   return chrome.storage.sync.get([url]).then((storageObject) => {
      return storageObject[url];
   });
});

// 4-trigger countdown
