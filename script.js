
async function fetchGitHubProfile() {
    const username = 'FerRufato'; 
    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(url);
      
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        const data = await response.json();

      
        document.querySelector('.profile-avatar').src = data.avatar_url;
        document.querySelector('.profile-name').textContent = data.name;
        document.querySelector('.profile-username').textContent = `@${data.login}`;
        document.querySelector('.repo-count').textContent = data.public_repos;
        document.querySelector('.followers-count').textContent = data.followers;
        document.querySelector('.following-count').textContent = data.following;
        document.querySelector('.profile-link').href = data.html_url;

    } catch (error) {
        console.error('Erro ao buscar o perfil do GitHub:', error);
    }
}


fetchGitHubProfile();
