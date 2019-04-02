const connection = require('../mysqlConnexion').connection

module.exports = {
  get(req, res, next) {
    connection.query('describe ?', req.params.table, (err, results, fields) => {
      res.json(results)
    })
  }
}