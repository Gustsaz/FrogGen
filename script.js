document.getElementById('loadFrog').addEventListener('click', async function() {
    try {
        // Substituímos pela sua chave de API do Unsplash
        const response = await fetch('https://api.unsplash.com/photos/random?query=frog&client_id=744877', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',  // Especifica que queremos uma resposta JSON
            },
        });

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro ao carregar imagem: ${response.statusText}`);
        }

        // Converte a resposta para JSON
        const data = await response.json();
        
        // A URL da imagem vem no campo "urls.full" (mude de acordo com o que você quer)
        const frogImageUrl = data[0].urls.full;
        
        // Crie um elemento de imagem para exibir
        const imgElement = document.createElement('img');
        imgElement.src = frogImageUrl;
        imgElement.alt = 'Sapo';
        imgElement.style.maxWidth = '100%';  // Ajusta a imagem ao tamanho da tela
        
        // Exibe a imagem no container
        const container = document.getElementById('frogImageContainer');
        container.innerHTML = ''; // Limpa a imagem anterior, se houver
        container.appendChild(imgElement);

    } catch (error) {
        console.error('Erro ao carregar a imagem do sapo:', error);
    }
});
