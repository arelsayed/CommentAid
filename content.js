//alert('Salam!')
chrome.runtime.onMessage.addListener(function (request){
    alert(request)
})