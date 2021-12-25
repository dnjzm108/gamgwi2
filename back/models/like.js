const Sequelize = require('sequelize')

module.exports = class Like extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            board_id:{
                type:Sequelize.INTEGER,
                allowNull:false,
                comment:'좋아요누른게시판id'
            },
            userid:{
                type:Sequelize.STRING(30),
                allowNull:false,
            }
        },{
            sequelize,
            timestamps:false,
            modelName:'Like',
            tableName:'likes',
            paranoid:false,
            charset:'utf8', 
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Like.belongsTo(db.Board,{foreignKey:'board_id',targetKey:'id',onDelete:'Cascade'})
        db.Like.belongsTo(db.User,{foreignKEy:'userid',targetKey:'userid',onDelete:'Cascade'})
    }
}