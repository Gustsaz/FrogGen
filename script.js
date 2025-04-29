document.getElementById('loadFrog').addEventListener('click', async function() {
    try {
        const response = await fetch('https://frogs.media/api/images/frog', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });
        
        // Se o status da resposta não for 2xx, lançamos um erro
        if (!response.ok) {
            throw new Error(`Erro ao carregar imagem: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Exibir a imagem
        const frogImageUrl = data.url;
        
        // Criar um elemento de imagem para exibir
        const imgElement = document.createElement('img');
        imgElement.src = frogImageUrl;
        imgElement.alt = 'Sapo';
        imgElement.style.maxWidth = '100%'; // Para ajustar a imagem ao tamanho da tela
        
        const container = document.getElementById('frogImageContainer');
        container.innerHTML = ''; // Limpar a imagem anterior, se houver
        container.appendChild(imgElement);

    } catch (error) {
        console.error('Erro ao carregar a imagem do sapo:', error);
    }
});
