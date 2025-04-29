document.getElementById('loadFrog').addEventListener('click', async function() {
    try {
        const response = await fetch('https://frogs.media/api/images/frog');
        if (!response.ok) {
            throw new Error('Falha ao buscar a imagem');
        }
        
        const data = await response.json();
        
        // Verifique a resposta da API
        console.log(data);

        const frogImageUrl = data.url;

        // Criar e exibir a imagem
        const imgElement = document.createElement('img');
        imgElement.src = frogImageUrl;
        imgElement.alt = 'Sapo';
        imgElement.style.maxWidth = '100%'; // Faz com que a imagem se ajuste ao tamanho da tela

        const container = document.getElementById('frogImageContainer');
        container.innerHTML = ''; // Limpar imagens antigas
        container.appendChild(imgElement);
        
    } catch (error) {
        console.error('Erro ao carregar a imagem do sapo:', error);
    }
});
