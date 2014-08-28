/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*              Browser Trust Http Helper | (c) Browser Trust 2014                      */
/*                                   Version 1.0                                                  */
/*                         this version has not been tested                                       */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/**
 * BrowserTrust namespace.
 */
if (BrowserTrust === "undefined") {
  var BrowserTrust = {};
};

// BrowserTrust.HttpHelper = {
//
//     function httpGet(theUrl)
//     {
//         var xmlHttp = null;
//         xmlHttp = new XMLHttpRequest();
//         xmlHttp.open( "GET", theUrl, false );
//         xmlHttp.send( null );
//         return xmlHttp.responseText;
//     };
//
//     function httpPost(theUrl, theMessage)
//     {
//         var xmlHttp = null;
//         xmlHttp = new XMLHttpRequest();
//         var params = theMessage;  // ??? message pre formatted ????
//         //var params = "fingerprint="+theMessage;
//         http.open("POST", theUrl, true);
//         http.setRequestHeader("Content-type", "text/plain")
//         http.setRequestHeader("Content-length", theMessage.length);
//         http.setRequestHeader("Connection", "close");
//         http.onreadystatechange = function() { //Call a function when the state changes.
//             if(http.readyState == 4 && http.status == 200) {
//                 alert(http.responseText);
//             }
//         }
//         http.send(params);
//     }
//
// };
