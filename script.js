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
    let response = "Dat is een goede vraag! Helaas heb ik momenteel geen antwoord voor je. Neem zekere hier eens een kijkje op onze site https://sites.google.com/erasmusatheneumkalmthout.be/ict-helpdeskerasmuskalmthout/leerlingen/chromebooks/eerste-hulp-bij-chromebook-mr-smet";
    if (userMessage.toLowerCase().includes("hallo")) {
        response = "Hallo! Hoe kan ik je helpen?";
    } else if (userMessage.toLowerCase().includes("probleem")) {
        response = "Kun je het probleem wat meer in detail beschrijven?";
    } else if (userMessage.toLowerCase().includes("dank")) {
        response = "Graag gedaan!";
    } else if (userMessage.toLowerCase().includes("Chromebook")) {
        response = "Ga langs bij meneer Smet. Je vind hier de beschikbare tijden https://docs.google.com/document/d/1sCE0KYGVNyY5bunSDriJOCXYvMDk_ywwJ21wLPs1bVs/edit?usp=sharing";
    } else if (userMessage.toLowerCase().includes("Smartschool")) {
        response = "Bekijk via deze link de handleiding van Smartschool: https://ka-erasmus.smartschool.be/?module=Manual&file=manual&function=main";
    } else if (usserMessage.toLowerCase().includes (("Google")) { 
        reponse= "Bekijk de Google handleiding via deze site: support.google.com/a/answer/1631886?hl=nl";
        
    setTimeout(() => {
        addMessageToChatBox(response, 'bot');
    }, 1000);
}