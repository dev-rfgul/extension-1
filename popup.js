// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("openVideo").addEventListener("click", function () {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.scripting.executeScript({
//         target: { tabId: tabs[0].id },
//         func: () => {
//           document.querySelectorAll("#thumbnail > yt-image > img")[0].click();
//         },
//       });
//     });
//   });
// });
// Send message to content script
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { message: "startCommenting" }, function(response) {
      // Handle response from content script, if necessary
      console.log("Response from content script:", response);
  });
});


// document.addEventListener("DOMContentLoaded", function () {
  
// });

// // click button id is submit-button
// document.querySelector('#placeholder-area').focus()
// document.execCommand('insertText', true, 'hello' )
