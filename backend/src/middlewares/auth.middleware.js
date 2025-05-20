import jwt from "jsonwebtoken";

export const autenticarToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ mensagem: "Acesso negado. Token não fornecido." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    console.error("Erro na autenticação:", error);
    return res.status(403).json({ mensagem: "Token inválido ou expirado" });
  }
};