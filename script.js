document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    if (nome && telefone) {
        const telefoneFormatado = telefone.replace(/\D/g, '');

        if (telefoneFormatado.length >= 10 && telefoneFormatado.length <= 11) {
            const novaLinha = document.createElement('tr');

            const nomeCell = document.createElement('td');
            nomeCell.textContent = nome;
            const telefoneCell = document.createElement('td');
            telefoneCell.textContent = telefoneFormatado;

            novaLinha.appendChild(nomeCell);
            novaLinha.appendChild(telefoneCell);

            document.getElementById('tabela-contatos').appendChild(novaLinha);

            document.getElementById('nome').value = '';
            document.getElementById('telefone').value = '';
        } else {
            alert('Por favor, insira um número de telefone válido com 10 ou 11 dígitos.');
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
