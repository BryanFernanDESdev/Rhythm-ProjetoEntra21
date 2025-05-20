// src/config/config.js
import { Sequelize } from 'sequelize';

// Não precisamos importar dotenv aqui, pois já é carregado no server.js

const sequelize = new Sequelize(
  process.env.DB_NAME || 'projeto_entra21',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'root', // Usando 'root' como senha padrão conforme seu .env
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false, // Desativando logs para produção
    dialectOptions: {
      // Para MySQL 8.0+
      charset: 'utf8mb4'
    }
  }
);

export { sequelize };