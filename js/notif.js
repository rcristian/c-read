chrome.runtime.onMessage.addListener(
  function(req, sender, sendResponse) {
  if (req.t) {
    var t = req.t;
    document.getElementById('t').innerText = t;
  }
});


