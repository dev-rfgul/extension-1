document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("openVideo").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          document.querySelectorAll("#thumbnail > yt-image > img")[0].click();

          var commentBtn = document.getElementById("comment");

          commentBtn.addEventListener("click", function () {
            console.log("comment button clicked");
            var placeHolder = document.querySelector("#placeholder-area");

            placeHolder.click();
            placeHolder.focus();
            placeHolder.execCommand("insertText", true, "hello");

            var button = document.getElementById("submit-button");

            if (button) {
              button.click();
            } else {
              console.log("Button with ID 'submit-button' not found.");
            }
          });
        },
      });
    });
  });
});

// // click button id is submit-button
// document.querySelector('#placeholder-area').focus()
// document.execCommand('insertText', true, 'hello' )
