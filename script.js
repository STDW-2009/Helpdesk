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
        botResponse(message);
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

function botResponse(userMessage) {
    let response = "Dat is een goede vraag! Helaas heb ik momenteel geen antwoord voor je.";
    if (userMessage.toLowerCase().includes("hallo")) {
        response = "Hallo! Hoe kan ik je helpen?";
    } else if (userMessage.toLowerCase().includes("probleem")) {
        response = "Kun je het probleem wat meer in detail beschrijven?";
    } else if (userMessage.toLowerCase().includes("dank")) {
        response = "Graag gedaan!";
    }

    setTimeout(() => {
        addMessageToChatBox(response, 'bot');
    }, 1000);
}
