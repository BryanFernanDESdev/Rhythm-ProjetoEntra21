import express from 'express';
import cors from 'cors';
import spotifyRoutes from '../routes/spotify.routes.js'

const app = express();
export const port = process.env.PORT || 3000;
app.use(cors())

app.use(spotifyRoutes);

app.get("/", (req, res) => {
  res.send("Servidor rodando!");
});

export default app