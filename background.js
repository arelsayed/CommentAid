function sendSelectedText(text) {
    var req = new XMLHttpRequest();
    req.addEventListener('readystatechange', function (evt) {
      if (req.readyState === 4) {
        if (req.status === 200) {
          alert('Got a response!');
        } else {
          alert("ERROR: status " + req.status);
        }
      }
    });
    req.open('GET', chrome.extension.getURL('/getresponses.php'), true);
    //req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(text);
    req.getResponseHeader('response')
  }
  
  chrome.browserAction.onClicked.addListener(function (tab) {
     sendSelectedText(selectedText);
  });