// Arquivo para anexar uma propriedade a mais na funcionalidade de requisição do Express.
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
