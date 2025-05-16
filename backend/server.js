import app, { port } from "./src/app/app.js";

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});