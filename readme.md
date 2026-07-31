# Contexto
Esse projeto faz parte de um teste técnico para desenvolvedor backend, envolvendo Node.js e MySQL

# Descrição
A intenção é fazer uma lista de contatos, aonde cada contato possui nome e telefone.
As funções necessárias são:
- Criação de contato
- Atualização de contato
- Exclusão de contato
Tudo isso dentro de um banco mySQL com todas as validações adequadas.

# Requisitos tecnicos:
1. Configuração de ambiente:
    1. Criar aplicação Node.js com o frameWork express.
    2. Conectar a um banco de dados MySQL.
    3. Criar um arquivo .env para armazenar variaveis de ambiente.

2. Rotas API:
    1. Post /contatos -> Adiciona um novo contato recebendo body:{"nome":"string","telefone":"string"} e retorna resposta 201 em caso de sucesso.
    2. Get /contatos -> Lista todos os contatos, retornando um status 200.
    3. Patch /contatos/{id} -> Atualiza um contato existente, recebendo o pathVariable id, e recebe o body:{"nome":"string","telefone":"string"} e retorna o contato atualizado com status 200
    4. Delete /contatos/{id} -> Exclui um contato existente, pelo pathVariable id, e retorna uma mensagem de sucesso com status 204.

3. Validações:
    1. Implementar validações para garantir que os dados atendam aos critérios:
        - Nome: Mínimo de duas palavras, cada uma com pelo menos 3 letras
        - Numero: Garantir o formato padrão

# Requisitos gerais:
- Não podem haver comentários no código
- Deve ser claro e seguir clean code
- Criar pequena documentação para configurar e rodar o projeto, incluindo instruções para conectar o mySQL
