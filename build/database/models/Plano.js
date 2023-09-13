"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class Plano extends sequelize_1.Model {
    static associate(models) {
        Plano.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
}
Plano.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
    },
    descricao: {
        type: sequelize_1.DataTypes.STRING,
    },
    valor: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    sequelize: index_1.default,
    tableName: 'Planos',
    timestamps: false,
});
exports.default = Plano;
