const Sequelize = require('sequelize')

module.exports = class Like extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            title_idx:{
                type:Sequelize.INTEGER,
                allowNull:false,
                comment:'좋아요누른글귀or고민'
            },
            like:{
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
}