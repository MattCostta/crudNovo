import { Request, Response } from 'express';
import { createUser, getUsers } from '../service/userService';
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'key123456'; 

const generateToken = (userId: number) => {
  const payload = { userId };
  const options = { expiresIn: '1h' };
  return jwt.sign(payload, SECRET_KEY, options);
};

const createUserController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { nome, email, senha } = req.body;
    const { user } = await createUser({ nome, email, senha }); 
    const token = generateToken(user.id); 
    res.setHeader('Authorization', 'Bearer ' + token);
    return res.status(201).json({
      message: 'Usuário criado com sucesso',
      code: 201,
      message_code: 'user_created',
      data: { user, token}
    }); 
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};

const getUserController = async (req: Request, res: Response): Promise<Response> => {
  const result = await getUsers();
  return res.status(200).json({
    message: 'Usuários retornados com sucesso',
    code: 200,
    message_code: 'teste',
    data: result,
  });
};

export { createUserController, getUserController };