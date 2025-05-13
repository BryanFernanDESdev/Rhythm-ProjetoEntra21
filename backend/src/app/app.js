import express from 'express';
import cors from 'cors';
import spotifyRoutes from '../routes/spotify.routes.js'

const app = express();
const port = process.env.PORT || 3000;
app.use(cors())

app.use(spotifyRoutes);

app.get("/", (req, res) => {
  res.send("Servidor rodando!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});