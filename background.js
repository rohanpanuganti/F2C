chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    setTimeout(() => {
        for (i = 0; i < 20; i++) {
            chrome.tabs.executeScript(tab.id, { file: "youtube.js" });
            chrome.tabs.executeScript(tab.id, { file: "netflix.js" });
        }
    }, 1500) 
});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, { file: "youtube.js" });
    chrome.tabs.executeScript(tab.id, { file: "netflix.js" });
});