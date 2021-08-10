const Sequelize = require('sequelize')

module.exports = class Comment extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            reply:{
                type:Sequelize.STRING(30),
                allowNull:true
            },
            commenter_name:{
                type:Sequelize.STRING(10),
                allowNull:false,
            },
            watch:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
                defaultValue:0
            },
            category:{
                type:Sequelize.STRING(20),
                allowNull:false
            },
            titleIdx:{
                type:Sequelize.INTEGER,
            }           
        },{
            sequelize,
            timestamps:true,
            modelName:'Comment',
            tableName:'comments',
            paranoid:true,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Comment.belongsTo(db.Board,{foreignKey:'titleIdx',targetKey:'id',onDelete:'Cascade'}        
        )
    }
}