// 1- find current active tab from current focused window

// async function currentURL() {
//    const windowId = (await chrome.windows.getCurrent()).id;
//    const [tab] = await chrome.tabs.query({ active: true, windowId });
//    if (tab) {
//       return new URL(tab.url).hostname;
//    } else {
//       return "No tab found";
//    }
// }

// currentURL().then((data) => console.log(data));

// // 2- Create local storage

// chrome.storage.sync.set({[await currentURL()]: 3 });

// // 3- check if current host name is part of storage

// chrome.storage.sync
//    .get([await currentURL()])
//    .then((result) => {
//       console.log("Value currently is " + result.key);
//    })
//    .catch((e) => {
//       console.error(e, "no link");
//    });
