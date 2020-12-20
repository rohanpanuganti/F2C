chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (validate(changeInfo.url)) {
        chrome.tabs.executeScript(tab.id, { file: "inject.js" });
    }
});

chrome.browserAction.onClicked.addListener(function(tab) {
    if (validate(tab.url)) {
        chrome.tabs.executeScript(tab.id, { file: "inject.js" });
    }
});

function validate(url){
    if (url) {
        var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if (url.match(regExp)) {
            return true;
        }
    }
    return false;
}