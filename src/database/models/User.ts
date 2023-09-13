import { DataTypes, Model } from 'sequelize';
import connection from './index';
import Plano from './Plano';

class User extends Model {
  declare id: number;
  declare nome: string;
  declare email: string;
  declare senha: number;

  static associate(models: any) {
    User.hasMany(models.Plano, { foreignKey: 'userId', as: 'planos' });
  }
}

User.init(
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
    email: {
      type: DataTypes.STRING,
    },
    senha: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: connection,
    tableName: 'Users',
    timestamps: false,
  }
);

export default User;