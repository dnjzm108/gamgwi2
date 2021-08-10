const Sequelize = require('sequelize')

module.exports = class Like extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            likeBoardIdx:{
                type:Sequelize.INTEGER,
                allowNull:false,
                comment:'좋아요누른게시판id'
            },
            likeCount:{
                type:Sequelize.INTEGER,
                allowNull:false,
                defaultValue:0,
                comment:'좋아요개수'
            },
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
        db.Like.belongsTo(db.Board,{foreignKey:'likeBoardIdx',targetKey:'id',onDelete:'Cascade'})
    }
}