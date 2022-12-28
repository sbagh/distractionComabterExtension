// 5-create alarm function
// function createAlarm() {
//    chrome.alarms.create("stop_getting_distracted", {
//       delayInMinutes: 0.1,
//       periodInMinuteS: 0.1,
//    });
// }

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
   let newURL = changeInfo.url;
   chrome.storage.sync.get(newURL).then((storageObject) => {
      return storageObject[url];
   });
})
