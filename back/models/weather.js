const Sequelize = require('sequelize')

module.exports = class Weather extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            emo:{
                type:Sequelize.TEXT,
                allowNull:true
            },
            text:{
                type:Sequelize.STRING(100),
                unique:true,
                allowNull:false,
                comment:'이모티콘저장'
            },
            emo_idx:{
                type:Sequelize.INTEGER,
                unique:true,
                allowNull:false,
                comment:'날씨이모티콘id구분'
            }

        },{
            sequelize,
            timestamps:false,
            modelName:'Weather',
            tableName:'weathers',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}