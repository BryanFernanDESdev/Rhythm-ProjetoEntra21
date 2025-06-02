import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initialize } from './config/db.js';
import router from './routes/index.js';
import { sessionMiddleware } from './middlewares/session.middleware.js';

dotenv.config();
initialize();

const port = process.env.SERVER_PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Configuração da sessão
app.use(sessionMiddleware);

app.use(router);

app.get('/', (req, res) => {
    res.send({msg:'servidor Rodando'})
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    console.log('servidor rodando')
});