// script.js
document.getElementById('loadFrog').addEventListener('click', async function() {
    try {
        // Fazendo a requisição para a Frog Docs API
        const response = await fetch('https://frogs.media/api/images/frog');
        const data = await response.json();

        // Verifique o que está vindo na resposta da API
        console.log(data);  // Isso ajuda a depurar e ver os detalhes da resposta

        // Pegando a URL da imagem da resposta
        const frogImageUrl = data.url;

        // Criando um novo elemento de imagem
        const imgElement = document.createElement('img');
        imgElement.src = frogImageUrl;
        imgElement.alt = 'Sapo';
        
        // Inserindo a imagem no container
        const container = document.getElementById('frogImageContainer');
        container.innerHTML = '';  // Limpa qualquer imagem anterior
        container.appendChild(imgElement);

    } catch (error) {
        console.error('Erro ao carregar a imagem do sapo:', error);
    }
});
