const jwt = require('jsonwebtoken');
import User from '../database/models/User';

const SECRET_KEY = 'key123456'; 

const generateToken = (userId: number) => {
  const payload = { userId };
  const options = { expiresIn: '1h' }; 
  return jwt.sign(payload, SECRET_KEY, options);
};

const createUser = async (newUser: any) => {
  try {
    const result = await User.create(newUser);
    const token = generateToken(result.id);
    return { user: result, token };
  } catch (error) {
    throw new Error('Erro ao criar o usuário: ' + error);
  }
};

const getUsers = async () => {
  const result = await User.findAll();
  return result;
};

export { createUser, getUsers };