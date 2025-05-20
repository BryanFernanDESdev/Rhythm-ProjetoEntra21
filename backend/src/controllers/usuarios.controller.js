import models from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const gerarToken = (usuario) => {
  return jwt.sign(
    { id: usuario.id, email: usuario.email },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
};

export const cadastrarUsuario = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuarioExistente = await models.Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: "Email já cadastrado" });
    }

    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);

    const novoUsuario = await models.Usuario.create({
      email,
      senha: senhaHash,
      criado_em: new Date()
    });

    const token = gerarToken(novoUsuario);

    res.status(201).json({
      mensagem: "Usuário cadastrado com sucesso",
      token,
      usuario: {
        id: novoUsuario.id,
        email: novoUsuario.email,
      },
    });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    res.status(500).json({ mensagem: "Erro ao cadastrar usuário", erro: error.message });
  }
};

export const loginUsuario = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = await models.Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ mensagem: "Senha incorreta" });
    }

    const token = gerarToken(usuario);

    res.status(200).json({
      mensagem: "Login realizado com sucesso",
      token,
      usuario: {
        id: usuario.id,
        email: usuario.email,
      },
    });
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    res.status(500).json({ mensagem: "Erro ao fazer login" });
  }
};

export const obterPerfil = async (req, res) => {
  try {
    const usuario = await models.Usuario.findByPk(req.usuario.id, {
      attributes: { exclude: ["senha"] },
    });

    if (!usuario) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(200).json(usuario);
  } catch (error) {
    console.error("Erro ao obter perfil:", error);
    res.status(500).json({ mensagem: "Erro ao obter perfil" });
  }
};