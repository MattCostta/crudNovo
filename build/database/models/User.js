"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class User extends sequelize_1.Model {
    static associate(models) {
        User.hasMany(models.Plano, { foreignKey: 'userId', as: 'planos' });
    }
}
User.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    senha: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    sequelize: index_1.default,
    tableName: 'Users',
    timestamps: false,
});
exports.default = User;
