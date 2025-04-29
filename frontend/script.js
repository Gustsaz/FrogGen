async function enviar() {
  const msg = document.getElementById("mensagem").value;
  const chat = document.getElementById("chat");

  chat.innerHTML += `<p><strong>Você:</strong> ${msg}</p>`;

  const resp = await fetch('https://SEU_BACKEND_URL/api/sapo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mensagem: msg })
  });

  const data = await resp.json();
  chat.innerHTML += `<p><strong>Sapo:</strong> ${data.resposta}</p>`;
  document.getElementById("mensagem").value = '';
}
