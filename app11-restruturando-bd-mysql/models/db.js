const Sequelize = require('sequelize')

// CONEXÃO COM O MYSQL
  const sequelize = new Sequelize('postagens', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}