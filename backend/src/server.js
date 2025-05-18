import express from 'express';
import cors from 'cors';
import { initialize } from './config/db.js';
import models from './models/index.js';

initialize()

const port = process.env.SERVER_PORT;
const app = express();
app.use(cors());

app.get('/musicas', async (req, res) => {
    try {
        console.log(models.Musica)
        const musicas = await models.Tom.findAll();
        res.json(musicas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar músicas', err: error });
    }
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    console.log('servidor rodando')
});