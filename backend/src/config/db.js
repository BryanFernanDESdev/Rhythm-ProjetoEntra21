import { sequelize } from '../config/config.js';

async function initialize() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Banco conectado com sucesso!');
  } catch (error) {
    console.error('Falha na conexão:', error);
  }
}

export { initialize, sequelize };