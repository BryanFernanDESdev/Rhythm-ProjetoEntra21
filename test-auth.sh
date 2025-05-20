#!/bin/bash

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${YELLOW}=== Iniciando teste de autenticação ===${NC}"

if [ ! -f "/home/brayn/Documentos/rhyt/.env" ]; then
    echo -e "${RED}Arquivo .env não encontrado. Verifique se você está no diretório correto.${NC}"
    exit 1
fi

echo -e "${YELLOW}Iniciando o backend...${NC}"
cd /home/brayn/Documentos/rhyt/backend
npm start &
BACKEND_PID=$!

echo -e "${YELLOW}Aguardando o backend iniciar (5 segundos)...${NC}"
sleep 5

if curl -s http://localhost:3000 > /dev/null; then
    echo -e "${GREEN}Backend iniciado com sucesso na porta 3000!${NC}"
else
    echo -e "${RED}Falha ao iniciar o backend. Verifique os logs para mais detalhes.${NC}"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

echo -e "${YELLOW}Iniciando o frontend...${NC}"
cd /home/brayn/Documentos/rhyt/frontend
npm run dev &
FRONTEND_PID=$!

echo -e "${YELLOW}Aguardando o frontend iniciar (10 segundos)...${NC}"
sleep 10

echo -e "${GREEN}=== Ambiente de teste pronto! ===${NC}"
echo -e "${GREEN}Frontend: http://localhost:5173${NC}"
echo -e "${GREEN}Backend: http://localhost:3000${NC}"
echo -e "${YELLOW}Páginas para testar:${NC}"
echo -e "${GREEN}- Login: http://localhost:5173/login${NC}"
echo -e "${GREEN}- Cadastro: http://localhost:5173/cadastro${NC}"
echo -e "${YELLOW}Pressione Ctrl+C para encerrar os serviços quando terminar os testes.${NC}"

wait $BACKEND_PID $FRONTEND_PID

trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null" EXIT