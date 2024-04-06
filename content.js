// // Listen for messages from background script or popup script
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.message === "startCommenting") {
//         document.querySelector("#subscribe-button-shape > button").click();
//         // Start commenting process
//         window.scrollBy(0, 400);
//         console.log("comment button clicked");
//         let placeholder = document.getElementById("placeholder-area");
//         if (placeholder) {
//             placeholder.focus();
//             placeholder.click();
//             document.execCommand("insertText", true, "hello");

//             var button = document.getElementById("submit-button");

//             if (button) {
//                 button.click();
//                 sendResponse({ success: true }); // Send response back to background script or popup script
//             } else {
//                 console.log("Button with ID 'submit-button' not found.");
//                 sendResponse({ success: false }); // Send response back to background script or popup script
//             }
//         } else {
//             console.log("Element with ID 'placeholder-area' not found.");
//             sendResponse({ success: false }); // Send response back to background script or popup script
//         }
//     }
// });
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "startCommenting") {
        document.querySelector("#subscribe-button-shape > button").click();
        // Wait for subscription action to complete
        setTimeout(function() {
            // Scroll
            window.scrollBy(0, 400);
            console.log("Scrolled");

            // Wait for placeholder area to be available
            var placeholderInterval = setInterval(function() {
                var placeholder = document.getElementById("placeholder-area");
                if (placeholder) {
                    clearInterval(placeholderInterval);
                    placeholder.focus();
                    placeholder.click();
                    document.execCommand("insertText", true, "hello");

                    // Wait for submit button to be available
                    var buttonInterval = setInterval(function() {
                        var button = document.getElementById("submit-button");
                        if (button) {
                            clearInterval(buttonInterval);
                            button.click();
                            sendResponse({ success: true }); // Send response back to background script or popup script
                        } else {
                            console.log("Button with ID 'submit-button' not found.");
                            sendResponse({ success: false }); // Send response back to background script or popup script
                        }
                    }, 1000); // Check every second for the submit button
                } else {
                    console.log("Element with ID 'placeholder-area' not found.");
                    sendResponse({ success: false }); // Send response back to background script or popup script
                }
            }, 1000); // Check every second for the placeholder area
        }, 2000); // Wait for 2 seconds after subscription click
    }
});
