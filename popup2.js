window.addEventListener('click', function(e){
    e = e || window.event;
    target = e.target
    if (target.innerHTML = "Reply"){
        console.log("reply button was clicked")
        document.getElementById("selectedText").innerHTML="a reply button was clicked";
    } else {
        console.log("something non reply was clicked")
        document.getElementById("selectedText").innerHTML="something was clicked, but it wasn't a reply button";
    }
})

/*
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').addEventListener('click', onclick, false)
    function onclick () {
        console.log('salaam console')
        chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
            chrome.tabs.executeScript(tabs[0].id, { code: `window.getSelection().toString()` }, (result) => {
                console.log(result);
                document.getElementById("selectedText").innerHTML=result[0].toString();
            });
        });
        console.log(window.getSelection().toString())
    }
    //document.getElementById("selectedText").innerHTML="this is the content of my div tag on the html page";

    document.getElementById("selectedText").mouseup(function() {
        //alert(getSelectedText());
        console.log('mouse button release')
    });

    function getSelectedText() {
        if (window.getSelection) {
            return window.getSelection().toString();
        } else if (document.selection) {
            return document.selection.createRange().text;
        }
        return '';
    }
}, false)
*/