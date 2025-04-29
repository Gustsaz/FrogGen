async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    // Exibe a mensagem do usuário no chat
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div><strong>Você:</strong> ${userInput}</div>`;

    // Envia a mensagem para o backend (API)
    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();

    // Exibe a resposta do bot sapo
    chatBox.innerHTML += `<div><strong>Sapo:</strong> ${data.reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    document.getElementById('user-input').value = '';
}
