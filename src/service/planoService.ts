import Plano from '../database/models/Plano';

export async function criarPlano(nome: string, descricao: string, valor: number, userId: number){
    try {
      const plano = await Plano.create({ nome, descricao, valor, userId });
      return plano;
    } catch (error) {
      throw new Error('Erro ao criar o plano: ' + error);
    }
  }