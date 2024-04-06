// Listen for messages from background script or popup script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var startProcess = document.querySelector("#startProcess");

  startProcess.addEventListener("click", function () {
    if (request.message === "startCommenting") {
      document.querySelector("#subscribe-button-shape > button").click();
      // Start commenting process
      window.scrollBy(0, 400);
      console.log("comment button clicked");
      let placeholder = document.getElementById("placeholder-area");
      if (placeholder) {
        placeholder.focus();
        placeholder.click();
        document.execCommand("insertText", true, "hello");

        var button = document.getElementById("submit-button");

        if (button) {
          button.click();
          sendResponse({ success: true }); // Send response back to background script or popup script
        } else {
          console.log("Button with ID 'submit-button' not found.");
          sendResponse({ success: false }); // Send response back to background script or popup script
        }
      } else {
        console.log("Element with ID 'placeholder-area' not found.");
        sendResponse({ success: false }); // Send response back to background script or popup script
      }
    }
  });
});
