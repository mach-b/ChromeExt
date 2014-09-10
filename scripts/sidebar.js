// Create an iFrame????
/*Handle requests from background.html*/
function handleRequest(
	//The object data with the request params
	request,
	//These last two ones isn't important for this example, if you want know more about it visit: http://code.google.com/chrome/extensions/messaging.html
	sender, sendResponse
	) {
	if (request.callFunction == "toggleSidebar")
		toggleSidebar();
}

chrome.extension.onRequest.addListener(handleRequest);

/*Small function wich create a sidebar(just to illustrate my point)*/
var sidebarOpen = false;
function toggleSidebar() {
	if(sidebarOpen) {
		var el = document.getElementById('mySidebar');
		el.parentNode.removeChild(el);
		sidebarOpen = false;
	}
	else {
		var sidebar = document.createElement('iframe');
		sidebar.id = "mySidebar";
		sidebar.innerHTML = "\
			<h1>Hello</h1>\
			World!\
		";
		sidebar.style.cssText = "\
			position:static;\
      overflow:auto;\
			top:0px;\
			left:0px;\
			width:30%;\
			height:100%;\
			background:white;\
			box-shadow:inset 0 0 1em black;\
			z-index:999999;\
		";
		//document.body.appendChild(sidebar);
    //document.body.insertBefore(sidebar, document.body.childNodes[0]);
    document.body.insertBefore(sidebar, document.body.firstChild);
    //document.body.insertAdjacentHTML( 'afterbegin', '<div id="myID">...</div>' );
    //document.body.insertAdjacentHTML( sidebar, document.body.childNodes[0] );
		sidebarOpen = true;
	}
}

// var iFrame = document.createElement('iframe');
// iFrame.setAttribute('id', 'some_id');
// document.body.insertBefore(iFrame, some_other_dom_element);
// iFrame.setAttribute('src', 'my_iframe_url_not_same_domain');

//toggleSidebar();

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     // console.log(sender.tab ?
//     //             "from a content script:" + sender.tab.url :
//     //             "from the extension");
//     if (request.sidebar == "toggle")
//       toggleSidebar();
// });
