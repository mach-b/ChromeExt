// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// var backgroundWindow = chrome.windows.create(
//    {url: "background.html?" + tabId, type: "popup", width: 800, height: 600});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.debugger.attach({tabId:tab.id}, version,
      onAttach.bind(null, tab.id));
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
  if (changeInfo.status === 'complete') {
      chrome.tabs.executeScript(tabId, {
        backgroundWindow.
      })
  }
});


// chrome.extension.onRequest.addListener(
//     function doStuff(request){
//         chrome.extension.onRequest.removeListener(doStuff);
//         other_function(request);
//     }
// );

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
    if (changeInfo.status === 'complete') {
        chrome.tabs.executeScript(tabId, {
            code: ' if (document.body.innerText.indexOf("Cat") !=-1) {' +
                  '     alert("Cat not found!");' +
                  ' }'
        });
    }
});

chrome.runtime.onMessage.addListener(function callback)

var version = "1.0";

// var backgroundWindow = chrome.windows.create(
//    {url: "background.html?" + tabId, type: "popup", width: 800, height: 600});

// function onAttach(tabId) {
//   if (chrome.runtime.lastError) {
//     alert(chrome.runtime.lastError.message);
//     alert(backgroundWindow);
//     return;
//   }


chrome.browserAction.setIcon({path: 'alertButton.png'});


//  chrome.windows.create(
//      {url: "background.html?" + tabId, type: "popup", width: 800, height: 600});
}
