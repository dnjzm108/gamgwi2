const Sequelize = require('sequelize')

module.exports = class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            content: {
                type: Sequelize.STRING(200),
                allowNull: true
            },
            commenter_name: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
                get: function () {
                    return moment(this.getDataValue('date')).format('YYYY-MM-DD-hh-mm-dd')
                }
            },
            titleIdx: {
                type: Sequelize.INTEGER,
            }
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Comment',
            tableName: 'comments',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        })
    }
    static associate(db) {
        db.Comment.belongsTo(db.Board, { foreignKey: 'titleIdx', targetKey: 'id', onDelete: 'Cascade' })
        db.Comment.belongsTo(db.User, { foreignKey: 'commenter_name', targetKey: 'userid', onDelete: 'Cascade' })
    }
}