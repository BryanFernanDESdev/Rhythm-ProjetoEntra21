import { Router } from "express";
import { cadastrarUsuario, loginUsuario, obterPerfil } from "../controllers/usuarios.controller.js";
import { autenticarToken } from "../middlewares/auth.middleware.js";

const router = Router();

// Rotas públicas
router.post("/", cadastrarUsuario);  // Rota para cadastro
router.post("/cadastro", cadastrarUsuario);  // Mantendo a rota original também
router.post("/login", loginUsuario);

// Rotas protegidas
router.get("/perfil", autenticarToken, obterPerfil);

export default router;