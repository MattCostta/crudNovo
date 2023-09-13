import { DataTypes, QueryInterface } from 'sequelize';

export default { 
    async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes){
        await queryInterface.createTable('Users',{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
              },
              nome: {
                type: DataTypes.STRING
              },
              email: {
                type: DataTypes.STRING
              },
              senha: {
                type: DataTypes.INTEGER
              },
        })
    },async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes){
        await queryInterface.dropTable('Users')
    },
}