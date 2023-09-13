import { DataTypes, Model } from 'sequelize';
import connection from './index';
import User from './User';

class Plano extends Model {
  declare id: number;
  declare nome: string;
  declare descricao: string;
  declare valor: number;

  static associate(models: any) {
    Plano.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  }
}

Plano.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      type: DataTypes.STRING,
    },
    descricao: {
      type: DataTypes.STRING,
    },
    valor: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: connection,
    tableName: 'Planos',
    timestamps: false,
  }
);

export default Plano;