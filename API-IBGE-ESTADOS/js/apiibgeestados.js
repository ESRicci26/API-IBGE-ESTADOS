        // Inicializando o banco de dados IndexedDB usando Dexie.js
        const db = new Dexie("IBGEEstadosDB");
        db.version(1).stores({
            estados: "id, sigla, nome, regiao"
        });

        // Consumindo a API e populando a tabela
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => response.json())
            .then(data => {
                const tbody = document.getElementById('estadosTable').getElementsByTagName('tbody')[0];
                data.forEach(estado => {
                    const row = tbody.insertRow();
                    row.addEventListener('click', () => populateForm(estado));

                    row.insertCell(0).textContent = estado.id;
                    row.insertCell(1).textContent = estado.sigla;
                    row.insertCell(2).textContent = estado.nome;
                    row.insertCell(3).textContent = estado.regiao.nome;
                });
            });

        // Função para preencher o formulário ao clicar numa linha da tabela
        function populateForm(estado) {
            document.getElementById('id').value = estado.id;
            document.getElementById('sigla').value = estado.sigla;
            document.getElementById('nome').value = estado.nome;
            document.getElementById('regiao').value = estado.regiao.nome;
        }

        // Função para salvar os dados da linha selecionada no IndexedDB
        function saveToIndexedDB() {
            const id = document.getElementById('id').value;
            const sigla = document.getElementById('sigla').value;
            const nome = document.getElementById('nome').value;
            const regiao = document.getElementById('regiao').value;

            db.estados.put({ id: parseInt(id), sigla: sigla, nome: nome, regiao: regiao })
                .then(() => alert('Dados salvos no IndexedDB com sucesso!'))
                .catch((error) => console.error("Erro ao salvar no IndexedDB:", error));
        }

        // Função para salvar todos os dados da tabela no IndexedDB
        function saveAllToIndexedDB() {
            const rows = document.getElementById('estadosTable').getElementsByTagName('tbody')[0].rows;
            let estados = [];

            for (let i = 0; i < rows.length; i++) {
                const cells = rows[i].cells;
                const estado = {
                    id: parseInt(cells[0].textContent),
                    sigla: cells[1].textContent,
                    nome: cells[2].textContent,
                    regiao: cells[3].textContent
                };
                estados.push(estado);
            }

            db.estados.bulkPut(estados)
                .then(() => alert('Todos os dados da tabela foram salvos no IndexedDB com sucesso!'))
                .catch((error) => console.error("Erro ao salvar todos os dados no IndexedDB:", error));
        }