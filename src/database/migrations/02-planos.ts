import { DataTypes, QueryInterface } from 'sequelize';

export default { 
    async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes){
        await queryInterface.createTable('Planos',{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
              },
              nome: {
                type: DataTypes.STRING
              },
              descricao: {
                type: DataTypes.STRING
              },
              valor: {
                type: DataTypes.INTEGER
              },
              userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                  model: 'Users', 
                  key: 'id', 
                },
              },
        })
    },async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes){
        await queryInterface.dropTable('Planos')
    },
}

