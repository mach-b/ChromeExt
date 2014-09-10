

//   chrome.extension.sendRequest("message", function(response_str), {alert("Content:"+response_str);});
//alert("CONTENT SCRIPT!");

//console.log('contentScript.js called');

//Sending a request from a content script looks like this:
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
  alert("*"+response.farewell);
});

// On the receiving end, you need to set up an runtime.onMessage event listener
// to handle the message. This looks the same from a content script or extension page.
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
});


var fingerprint = {}; //url: "hash"
//BrowserTrust.JSONHandler.insertValue(fingerprint, "url", "hash");
insertValue(fingerprint, "url", "hash");
chrome.runtime.sendMessage(fingerprint, function(response) {
  console.log(response.confirmation);
  alert("#"+response.farewell);
});
