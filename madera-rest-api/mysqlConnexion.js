const mysql = require('mysql')

module.exports = {
  connection: mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'cesi_pfr_madera',
    port     : 3307
  })
}