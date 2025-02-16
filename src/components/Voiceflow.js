import { useState, useEffect } from 'react';

export function useVoiceflow() {
    const [agentLoaded, setAgentLoaded] = useState(false);

    useEffect(() => {
        // Remove previous voiceflow-related items
        Object.keys(localStorage).forEach((key) => {
            if (key.startsWith('voiceflow')) {
                localStorage.removeItem(key);
            }
        });

        // Create the script element
        const script = document.createElement('script');
        script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
        script.type = 'text/javascript';
        script.async = true;
        script.onload = () => {
            if (window.voiceflow && window.voiceflow.chat) {
                window.voiceflow.chat.load({
                    verify: { projectID: '67aae7ddc0b42786788ae81a' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                });
                // Immediately close the chat so it doesn't remain open on refresh
                window.voiceflow.chat.close();
                setAgentLoaded(true);
            }
        };

        document.body.appendChild(script);

        // Cleanup on unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const openChat = () => {
        if (agentLoaded && window.voiceflow && window.voiceflow.chat) {
            window.voiceflow.chat.open();
        } else {
            console.error('Voiceflow chat widget not loaded yet.');
        }
    };

    return { agentLoaded, openChat };
}
