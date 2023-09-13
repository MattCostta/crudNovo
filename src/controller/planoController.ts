import { Request, Response } from 'express';
import { criarPlano } from '../service/planoService';
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'key123456'; 

const verifyToken = (token: string) => {
  try {
    const decodedToken: any = jwt.verify(token, SECRET_KEY);
    return decodedToken;
  } catch (error) {
    throw new Error('Token inválido');
  }
};

const createPlanoController = async (req: Request, res: Response): Promise<Response> => {
  try {
    
    
    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }

    const tokenParts = authorizationHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ message: 'Token inválido' });
    }

    const token = tokenParts[1];

    const decodedToken: any = verifyToken(token); 
    const userId = decodedToken.userId;

    
    const { nome, descricao, valor } = req.body;
    const newPlano = await criarPlano(nome, descricao, valor, userId);

    return res.status(201).json({
        message: 'Plano criado com sucesso',
        code: 201,
        message_code: 'plano_created',
        data: { newPlano}});
  } catch (error: any) {
    return res.status(500).send(error.message);
    
  }
};

export default createPlanoController;