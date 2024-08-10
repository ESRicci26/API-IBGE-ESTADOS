RESUMO CONSUMIR A API DO IBGE DE TODOS OS ESTADOS BRASILEIROS
-------------------------------------------------------------

https://servicodados.ibge.gov.br/api/v1/localidades/estados

Esse código JavaScript/HTML/CSS para consumir a API do IBGE de Estados do Brasil e exibir todos os estados numa table, preencher os campos de input ao
clicar em uma linha da tabela e salvar os dados no Data Base: IBGEEstadosDB Tabela: estados do IndexedDB usando DixieJS ao apertar o botão 
"Salvar Linha IndexedDB" salva apenas o item do input e ao apertar o botão "Salvar Toda Tabela IndexedDB" salva todos os conteúdos listados na table.

Detalhes:
---------
Tabela HTML: A tabela exibe os dados dos estados, com colunas para ID, Sigla, Nome e Região.

Formulário HTML: Um formulário avançado usando CSS com campos de input é preenchido quando uma linha da tabela é clicada.

IndexedDB: Usando Dexie.js para interagir com o IndexedDB, o código salva os dados do campo input no banco de dados local quando o botão 
"Salvar Linha IndexedDB" é clicado e o botão "Salvar Toda Tabela IndexedDB" quando clicado, chama a função saveAllToIndexedDB para salvar todos 
os dados da tabela no IndexedDB.

População da Tabela: A API do IBGE é consumida com fetch, e os dados são exibidos na tabela.

Interatividade: Ao clicar em uma linha da tabela, os dados da linha são preenchidos nos campos de input.

Função saveAllToIndexedDB:
--------------------------
Iteração pelas Linhas da Tabela: A função percorre todas as linhas da tabela e extrai os dados das células.

Salvamento em Massa: Usando o método bulkPut do Dexie.js, todos os dados são salvos de uma vez no IndexedDB, o que é mais eficiente quando se trata
de grandes volumes de dados.

Com este código, você tem a opção de salvar uma linha específica ou todos os dados da tabela no IndexedDB com apenas um clique, muito útil para incorporar
numa aplicação corporativa.
