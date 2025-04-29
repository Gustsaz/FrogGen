document.getElementById('loadFrog').addEventListener('click', async function() {
    try {
        const response = await fetch('https://api.unsplash.com/photos/random?query=frog&client_id=SUA_CHAVE_DE_API', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erro ao carregar imagem: ${response.statusText}`);
        }

        const data = await response.json();
        
        const frogImageUrl = data[0].urls.full; // Acessando o link da imagem
        
        const imgElement = document.createElement('img');
        imgElement.src = frogImageUrl;
        imgElement.alt = 'Sapo';
        imgElement.style.maxWidth = '100%';
        
        const container = document.getElementById('frogImageContainer');
        container.innerHTML = ''; // Limpar a imagem anterior, se houver
        container.appendChild(imgElement);

    } catch (error) {
        console.error('Erro ao carregar a imagem do sapo:', error);
    }
});
