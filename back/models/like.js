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
            likeStatus:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
                defaultValue:false,
                comment:'true,1=>하트 false,0=>노하트'
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
        db.Like.belongsTo(db.Board,{foreignKey:'likeBoardIdx',targetKey:'id',onDelete:'Cascade'})
        db.Like.belongsTo(db.User,{foreignKEy:'userid',targetKey:'userid',onDelete:'Cascade'})
    }
}