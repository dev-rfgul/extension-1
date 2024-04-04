document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("openVideo").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          document.querySelectorAll("#thumbnail > yt-image > img")[0].click();
          console.log("clicked");
        },
      });
    });
  });
});
