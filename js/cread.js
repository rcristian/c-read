
function readSelection(info, tab) {

    function send_selection() {
		chrome.runtime.sendMessage({ t: info.selectionText }, function(response) {});
    }

    var w = 440;
    var h = 220;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2); 

	chrome.windows.create({'url': 'cread.html', 'type': 'popup', 'width': w, 'height': h, 'left': left, 'top': top} , send_selection);
}

chrome.contextMenus.create({"title": "Read", "contexts": ["selection"], "onclick": readSelection});

