import express from 'express';
import cors from 'cors';
import { initialize } from './config/db.js';
import router from './routes/index.js'

initialize()

const port = process.env.SERVER_PORT;
const app = express();
app.use(cors());

app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    console.log('servidor rodando')
});