import express from 'express';
import session from 'express-session';

/**
 * Middleware para gerenciar sessões de usuário
 */
export const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET || 'secret-key-for-session',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 horas
  }
});

/**
 * Middleware para verificar se o usuário está autenticado
 */
export const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.usuario) {
    return next();
  }
  return res.status(401).json({ error: 'Não autorizado' });
};