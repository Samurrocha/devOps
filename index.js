
// Função para buscar dados da API
async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET'
        })

        const users = await response.json();

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const tbody = document.querySelector('tbody');

        // Preenchendo a tabela com dados
        users.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.address.zipcode}</td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Error fetching user:', error);
    }

}

const button = document.getElementById('submit-button')
const relatorio = document.getElementById('relatorio')
const container = document.getElementById('container')

button.addEventListener("click", () => {
    fetchUser();

    container.style.display = 'none'
    relatorio.style.display = 'block'

})


