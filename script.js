function sendMessage(event) {
    if (event.key === "Enter") {
        sendButton();
    }
}

function sendButton() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message) {
        addMessageToChatBox(message, 'user');
        userInput.value = '';
        postMessage(message);
    }
}

function addMessageToChatBox(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function postMessage(message) {
    const response = await fetch('https://helpdesk-sm87m41dl-stdw-2009s-projects.vercel.app/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });

    const data = await response.json();
    if (data.reply) {
        setTimeout(() => {
            addMessageToChatBox(data.reply, 'bot');
        }, 1000);
    }
}
