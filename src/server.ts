import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import AppError from '@shared/errors/AppError';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Middleware que lida com erros Globais:
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  /**
   * Se o erro for uma instância do nosso 'AppError', então ele será exibido
   * com a mensagem personalizada que passamos.
   */
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  console.error(err);

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

app.listen(3333, () => {
  console.log('🚀 Servidor Iniciado na porta 3333');
});
