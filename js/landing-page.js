// Function to open Voiceflow Chat
function openChat() {
    if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.open();
    } else {
        setTimeout(() => {
            if (window.voiceflow && window.voiceflow.chat) {
                window.voiceflow.chat.open();
            } else {
                console.error('Voiceflow chat widget is not loaded yet.');
            }
        }, 500);
    }
}

// Load Voiceflow Chat widget asynchronously
(function (d, t) {
    var v = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    v.onload = function () {
        window.voiceflow.chat.load({
            verify: { projectID: "67aae7ddc0b42786788ae81a" },
            url: "https://general-runtime.voiceflow.com",
            versionID: "production"
        });
    };
    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    v.type = "text/javascript";
    s.parentNode.insertBefore(v, s);
})(document, "script");

// Clear Voiceflow chat history from localStorage on page load
window.addEventListener('load', function() {
    localStorage.removeItem('voiceflow_conversation');
});
