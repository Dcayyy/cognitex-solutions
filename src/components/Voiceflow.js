import { useState, useEffect } from 'react';

export function Voiceflow() {
    const [agentLoaded, setAgentLoaded] = useState(false);

    const FormExtension = {
        name: 'Forms',
        type: 'response',
        // Check that trace.payload exists before reading its name
        match: ({ trace }) =>
            trace.type === 'Custom_Form' ||
            (trace.payload && trace.payload.name === 'Custom_Form'),
        render: ({ trace, element }) => {
            const formContainer = document.createElement('form');

            formContainer.innerHTML = `
        <style>
          label {
            font-size: 0.8em;
            color: #888;
          }
          input[type="text"], input[type="email"], input[type="tel"] {
            width: 100%;
            border: none;
            border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
            background: transparent;
            margin: 5px 0;
            outline: none;
            padding: 8px 0; /* Added some padding for better UX */
          }
          .phone {
            width: 150px;
          }
          .invalid {
            border-color: red;
          }
          .submit {
            background: linear-gradient(to right, #2e6ee1, #2e7ff1);
            border: none;
            color: white;
            padding: 10px;
            border-radius: 5px;
            width: 100%;
            cursor: pointer;
          }
        </style>

        <label for="name">Name</label>
        <input type="text" class="name" name="name" required><br><br>

        <label for="email">Email</label>
        <input type="email" class="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" title="Invalid email address"><br><br>

        <label for="phone">Phone Number</label>
        <input type="tel" class="phone" name="phone" required pattern="\\d+" title="Invalid phone number, please enter only numbers"><br><br>

        <input type="submit" class="submit" value="Submit">
      `;

            formContainer.addEventListener('input', () => {
                const name = formContainer.querySelector('.name');
                const email = formContainer.querySelector('.email');
                const phone = formContainer.querySelector('.phone');

                if (name?.checkValidity()) name.classList.remove('invalid');
                if (email?.checkValidity()) email.classList.remove('invalid');
                if (phone?.checkValidity()) phone.classList.remove('invalid');
            });

            formContainer.addEventListener('submit', (event) => {
                event.preventDefault();

                const name = formContainer.querySelector('.name');
                const email = formContainer.querySelector('.email');
                const phone = formContainer.querySelector('.phone');

                if (!name.checkValidity() || !email.checkValidity() || !phone.checkValidity()) {
                    name.classList.add('invalid');
                    email.classList.add('invalid');
                    phone.classList.add('invalid');
                    return;
                }

                formContainer.querySelector('.submit').remove();

                window.voiceflow.chat.interact({
                    type: 'complete',
                    payload: { name: name.value, email: email.value, phone: phone.value },
                });
            });

            element.appendChild(formContainer);
        },
    };

    useEffect(() => {
        // Clear previous Voiceflow data from localStorage
        Object.keys(localStorage).forEach((key) => {
            if (key.startsWith('voiceflow')) {
                localStorage.removeItem(key);
            }
        });

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
                    assistant: {
                        extensions: [FormExtension],
                    },
                });
                window.voiceflow.chat.close();
                setAgentLoaded(true);
            }
        };

        document.body.appendChild(script);
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
