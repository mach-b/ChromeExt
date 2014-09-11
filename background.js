
var interfaceTabID;
var interfaceWindowID;



chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  //alert("TAB Updated!"+changeInfo.url);
  //console.log("tabID = "+tabID+"\nchangeInfo = "+changeInfo)
});

// On the receiving end, you need to set up an runtime.onMessage event listener
// to handle the message. This looks the same from a content script or extension page.
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    // if (request.greeting == "hello")
    //   sendResponse({farewell: "goodbye"});
    if (request.url == "hash")
      sendResponse({farewell: "Got hash!"});
});


// Sending a request from the extension to a content script looks very similar,
// except that you need to specify which tab to send it to.
// This example demonstrates sending a message to the content script in the selected tab.
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});




/////////// OPEN EXTENSION TAB //////////////////////////
  chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var url = 
    if(interfaceTabID==undefined || interfaceWindowID==undefined) {
      var newURL = "http://www.youtube.com/watch?v=oHg5SJYRHA0";
      chrome.tabs.create({ url: newURL });
    }else {
      // chrome.tabs.update(tabId, {selected: true});
      //alert("defined")
      chrome.windows.update(interfaceWindowID, {focused: true});
      chrome.tabs.update(interfaceTabID, {selected: true});

    }

    // chrome.tabs.query({ active: true, windowId: chrome.windows.WINDOW_ID_CURRENT }, function (tabs) {
    // // Do something with tabs
    // });
    //alert("tabID:"+interfaceTabID+"\nwindowID:"+interfaceWindowID);
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
      interfaceTabID = tabs[0].id;
      interfaceWindowID = tabs[0].windowId;
      alert("tabID:"+interfaceTabID+"\nwindowID:"+interfaceWindowID);
    });

});
