document.addEventListener('DOMContentLoaded', function(){
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        chrome.tabs.executeScript(tabs[0].id, { code: `window.getSelection().toString()` }, (result) => {
            console.log(result);
            document.getElementById("selectedText").innerHTML=result[0].toString();
        });
    });
    document.getElementById("response1").innerHTML="Islam prohibits consummating a marriage with a girl that has not reached puberty. Girls can reach puberty at a young age, and around the world it was a norm for girls to marry at a very young age. In the famous story of Romeo and Juliet, Juliet was 13 years old. Reaching adulthood at the age of 18 is a modern invention. To judge the actions of other cultures in the past is committing both ethnocentric and presentist errors. Aisha became an inspiring leading member in early Muslim society."
    document.getElementById("response1Link").setAttribute("href","https://yaqeeninstitute.ca/series/more-than-just-a-number-perspectives-on-the-age-of-aisha")
    document.getElementById("response2").innerHTML="The Qur'an says, \" and He does not forbid you to deal kindly and justly with anyone who has not fought you for your faith or driven you out of your homes: God loves the just.\" (Quran 60:8) This means that any verse in the Qur'an that seems to have violence is talking about dealing with people who are fighting you and trying to drive you out of your homes."
}, false)

function copyResponse1() {
    console.log("copying response 1")
    /* Get the text field */
    var copyText = document.getElementById("response1");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }