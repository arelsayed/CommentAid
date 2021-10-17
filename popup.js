document.addEventListener('DOMContentLoaded', function(){
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        chrome.tabs.executeScript(tabs[0].id, { code: `window.getSelection().toString()` }, (result) => {
            console.log(result);
            document.getElementById("selectedText").innerHTML=result[0].toString();
        });
        //chrome.tabs.executeScript(tabs[0].id, { code: `window.getSelection().removeAllRanges()`})
    });
    
    document.getElementById("response1").innerHTML="Islam prohibits consummating a marriage with a girl that has not reached puberty. Girls can reach puberty at a young age, and around the world it was a norm for girls to marry at a very young age. In the famous story of Romeo and Juliet, Juliet was 13 years old. Reaching adulthood at the age of 18 is a modern invention. To judge the actions of other cultures in the past is committing both ethnocentric and presentist errors. Aisha became an inspiring leading member in early Muslim society."
    document.getElementById("response1Link").setAttribute("href","https://yaqeeninstitute.ca/series/more-than-just-a-number-perspectives-on-the-age-of-aisha")
    document.getElementById("response2").innerHTML="The Qur'an says, \" and He does not forbid you to deal kindly and justly with anyone who has not fought you for your faith or driven you out of your homes: God loves the just.\" (Quran 60:8) This means that any verse in the Qur'an that seems to have violence is talking about dealing with people who are fighting you and trying to drive you out of your homes."
    document.getElementById("response2Link").setAttribute("href","https://yaqeeninstitute.ca/series/more-than-just-a-number-perspectives-on-the-age-of-aisha")

    const inspiringQuotes = [
        "Be like the flower that gives its fragrance to even the hand that crushes it",
        "The moon traverses the night sky in its splendor and the dogs howl, but the howling of the dogs can not affect the moon",
        "Don\'t look down on anyone, unless you are helping them up",
        "For truly with hardship comes ease",
        "And the tree that takes the longest to bear fruit is not the fig tree or the date tree. It is man.",
        "Do little things with great love",
        "Knowledge is knowing what to say, Wisdom is knowing how to say it",
        "Let the dog bark, the moon shall beam on",
        "You can\'t direct the wind, but you can adjust the sails",
        "Oh you who believe! Stand out firmly for justice, as witnesses to God, even against yourselves, or your parents, or your kin, and whether it be against rich or poor, for God can best protect both.",
        "It is better to light a candle than to curse the darkness",
        "The tiny seed knew that in order to grow it needed to be dropped in dirt, covered in darkness, and struggle to reach the light",
        "A society grows great when old men plant trees whose shade they know they shall never sit in",
        "A ship in port is safe but that's not what ships are built for",
        "We build too many walls and not enough bridges",
        "Raise your words, not your voice. It is rain that grows flowers, not thunder",
        "Help your brother, whether he is an oppressor or he is an oppressed one. People asked, \"O Allah\'s Apostle! It is all right to help him if he is oppressed, but how should we help him if he is an oppressor?\" The Prophet (ﷺ) said, \"By preventing him from oppressing others.\"",
        "HasbunAllahu wa ni`mal Wakeel. \"Sufficient for us is Allah, and He is the Best Disposer of affairs (for us).\”",
        "They want to extinguish the light of God with their mouths, but God will perfect His light, although the disbelievers dislike it.",
        "Allah\'s Light is unquenchable. A foolish, ignorant person who thinks of extinguishing it is like a rustic who wants to blow out electric light as he might blow out a rush candle! \"With their mouths\" also implies the babble and cackle of ignorance against Allah's Truth.",
        "The most important work we can do, individually and globally, is the healing of traumas so that we don’t pass them down to future generations",
    ]
    document.getElementById("inspiringQuote").innerHTML=inspiringQuotes[Math.floor(Math.random()*inspiringQuotes.length)]

    document.getElementById("CopyResponse1Button").addEventListener('click',function(){
        console.log("copying response 1")
        /* Get the text field */
        var copyText = document.getElementById("response1").innerHTML
        //var copyText = document.getElementById("response1")
        /* Select the text field */
        //copyText.select();
        //copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
         /* Copy the text inside the text field */
        //navigator.clipboard.writeText(copyText.value);
        var promise = navigator.clipboard.writeText(copyText)
        .then(() => {
            // Success!
          })
          .catch(err => {
            console.log('Something went wrong', err);
        });
      }, false)

      document.getElementById("CopyResponse2Button").addEventListener('click',function(){
        console.log("copying response 2")
        /* Get the text field */
        var copyText = document.getElementById("response2").innerHTML
        //var copyText = document.getElementById("response1")
        /* Select the text field */
        //copyText.select();
        //copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
         /* Copy the text inside the text field */
        //navigator.clipboard.writeText(copyText.value);
        var promise = navigator.clipboard.writeText(copyText)
        .then(() => {
            // Success!
          })
          .catch(err => {
            console.log('Something went wrong', err);
        });
      }, false)
}, false)
