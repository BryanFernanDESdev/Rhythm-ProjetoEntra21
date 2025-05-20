# Instruções para Testar as Páginas de Login e Cadastro

Este guia explica como testar as páginas de login e cadastro do projeto Rhyt.

## Pré-requisitos

1. Node.js instalado
2. Banco de dados configurado conforme o arquivo `.env`
3. Dependências instaladas (`npm install` nas pastas backend e frontend)

## Método 1: Script Automatizado

```bash
# Na raiz do projeto
./test-auth.sh
```

O script inicia o backend (porta 3000) e o frontend (porta 5173).
Para encerrar os serviços, pressione `Ctrl+C`.

## Método 2: Iniciar Manualmente

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run dev
```

## Testando as Páginas

1. Página de cadastro: http://localhost:5173/cadastro
   - Crie uma conta com email e senha
   - Verifique o redirecionamento após cadastro

2. Página de login: http://localhost:5173/login
   - Faça login com as credenciais criadas
   - Verifique o redirecionamento após login

## Solução de Problemas

### Erro de Conexão com o Banco de Dados
- Verifique se o banco de dados está rodando
- Confirme as credenciais no arquivo `.env`

### Erro "JWT_SECRET não definido"
- Verifique se o arquivo `.env` contém a variável `JWT_SECRET`

### Erro CORS
- Verifique a configuração CORS no servidor

### Páginas não carregam
- Verifique se o frontend está rodando
- Confirme a URL da API no frontend