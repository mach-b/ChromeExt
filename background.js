// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// God, don't use with a default popup
chrome.browserAction.onClicked.addListener(function(tab){
    console.log('I am clicked');
    chrome.browserAction.setIcon({path: 'alertButton.png'});
    alert("CLICKED!");
    chrome.tabs.executeScript(null,{file:"contentScript.js"});

});

// var backgroundWindow = chrome.windows.create(
//    {url: "background.html?" + tabId, type: "popup", width: 800, height: 600});

//chrome.browserAction.setIcon({path: 'alertButton.png'});

// console.log("Logger.");
// alert("This is an Alert!");

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.debugger.attach({tabId:tab.id}, version,
//       onAttach.bind(null, tab.id));
// });


// chrome.runtime.addListener(function (request, sender, sendResponse)) {
//   if(request.action == "show") {
//     chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
//       chrome.pageAction.show(tabs[0].id);
//     });
//   }
// }

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//
// });
//
// chrome.tabs.onCreated.addListener(function(tabId, changeInfo, tab) {
//
// });

// function onRequest(request, sender, sendResponse)
// {
//   console.log("onRequest()");
//   alert(request);
//   chrome.browserAction.
//   sendResponse("test response");
// }

// chrome.extension.onRequest.addListener(onRequest);


// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   if (changeInfo.status === 'complete') {
//       chrome.tabs.executeScript(tabId, {
//         // //console.log("Logger.");
//         // //alert("This is an Alert!");
//         // code: 'console.log("listener logger.");'
//       });
//   }
// });

// chrome.tabs.getCurrent(function(tab){
//         console.log("URL: "+tab.url);
//     }
// );

// chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//     console.log("URL alternate method: "+tabs[0].url);
// });

// chrome.extension.onRequest.addListener(
//     function doStuff(request){
//         chrome.extension.onRequest.removeListener(doStuff);
//         other_function(request);
//     }
// );

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     if (changeInfo.status === 'complete') {
//         chrome.tabs.executeScript(tabId, {
//             code: ' if (document.body.innerText.indexOf("Cat") !=-1) {' +
//                   '     alert("Cat not found!");' +
//                   ' }'
//         });
//     }
// });

//chrome.runtime.onMessage.addListener(function callback);

//var version = "1.0";

// var backgroundWindow = chrome.windows.create(
//    {url: "background.html?" + tabId, type: "popup", width: 800, height: 600});

// function onAttach(tabId) {
//   if (chrome.runtime.lastError) {
//     alert(chrome.runtime.lastError.message);
//     alert(backgroundWindow);
//     return;
//   }


//chrome.browserAction.setIcon({path: 'alertButton.png'});


//  chrome.windows.create(
//      {url: "background.html?" + tabId, type: "popup", width: 800, height: 600});
//}
