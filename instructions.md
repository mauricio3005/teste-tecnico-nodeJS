# Instruções de configuração e execução

## Pré-requisitos
- Node.js instalado
- MySQL instalado e rodando localmente

## 1. Instalar dependências
npm install


## 2. Configurar variáveis de ambiente
Copie o arquivo `.env.example` para `.env` e preencha com os dados do seu MySQL:

## 3. Criar o banco de dados
Execute o script `schema.sql` no seu MySQL para criar o banco e a tabela `contatos`:
mysql -u root -p < schema.sql
Ou rode o conteúdo do arquivo diretamente em um cliente MySQL (Workbench, DBeaver, etc).

## 4. Testar a conexão com o banco
node db_test.js
Deve exibir "Conexão ok" no terminal.

## 5. Iniciar o servidor
O servidor sobe na porta definida em `PORT` (padrão 3000).

## Rotas disponíveis
| Método | Rota | Body | Resposta |
|---|---|---|---|
| POST | /contatos | `{"nome": "string", "telefone": "string"}` | 201 |
| GET | /contatos | - | 200 |
| PATCH | /contatos/:id | `{"nome": "string", "telefone": "string"}` | 200 |
| DELETE | /contatos/:id | - | 204 |

## Validações
- **Nome**: mínimo de duas palavras, cada uma com pelo menos 3 letras.
- **Telefone**: formato brasileiro, fixo (10 dígitos) ou celular (11 dígitos, com o nono dígito `9` obrigatório após o DDD).
