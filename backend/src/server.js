import express, {json} from 'express';
import cors from 'cors';
import { initialize } from './config/db.js';
import router from './routes/index.js'
import usuariosRoutes from './routes/usuarios.routes.js';
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: path.resolve(__dirname, '../../.env') });

console.log('Variáveis de ambiente carregadas:');
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '******' : 'não definido');
console.log('DB_NAME:', process.env.DB_NAME);
console.log('JWT_SECRET:', process.env.JWT_SECRET ? '******' : 'não definido');

initialize()

const port = process.env.PORT || process.env.SERVER_PORT || 3000;
const app = express();
app.use(json())
app.use(cors());

app.use(express.json())

app.use('/api/usuarios', usuariosRoutes);
app.use(router)

app.get('/', (req, res) => {
    res.send({msg:'servidor Rodando'})
})

app.use((req, res) => {
    console.log(`Rota não encontrada: ${req.method} ${req.url}`);
    res.status(404).json({ mensagem: 'Rota não encontrada' });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    console.log('servidor rodando')
});