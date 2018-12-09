module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'Post',
    {
      title: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    }
  )
}