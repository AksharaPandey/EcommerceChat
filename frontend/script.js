const inputField = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');
const messagesContainer = document.getElementById('chatbot-messages');

sendButton.addEventListener('click', sendMessage);
inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const userMessage = inputField.value.trim();
    if (userMessage === '') return;

    addMessage(userMessage, 'user');
    inputField.value = '';

    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        addMessage(botResponse, 'bot');
    }, 1000);
}

function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('price')) {
        return 'We have products ranging from $10 to $500. Can you specify what you are looking for?';
    } else if (lowerMessage.includes('return policy')) {
        return 'You can return any product within 30 days of purchase. 😊';
    } else {
        return 'I am here to assist you with your shopping. Can you elaborate?';
    }
}
