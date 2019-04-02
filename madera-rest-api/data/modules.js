const connection = require('../mysqlConnexion').connection

module.exports = {
  get(req, res, next) {
    if (req.params.id) {
      connection.query('SELECT * from modules where id=?', req.params.id, (err, results, fields) => {
        res.send(err ? err : results[0])
      });
    } else {
      connection.query('SELECT * from modules', (err, results, fields) => {
        res.json(err ? err : results);
      });
    }
    next()
  },
  getBy(req, res, next) {
    const resource = req._url.path.split('/', 2).pop()
    let sql = ''
    switch (resource) {
      case 'models' : 
        sql = 'SELECT * from modules inner join modules_per_model on modules_per_model.id_modules = modules.id where modules_per_model.id_modules = ?';
        break;
      case 'ranges' : 
        sql = 'SELECT * from modules inner join modules_per_range_per_quote on modules_per_range_per_quote.id_modules = modules.id where modules_per_range_per_quote.id_ranges = ?';
        break;
      case 'quotes' : 
        sql = 'SELECT * from modules inner join modules_per_range_per_quote on modules_per_range_per_quote.id_modules = modules.id where modules_per_range_per_quote.id_quotes = ?';
        break;
      default : 
        break;
    }
    if (sql) {
      connection.query(sql, req.params.id, (err, results, fields) => {
        res.json(err ? err : results)
      })
    }
  },
  add(req, res, next) {
    if (!req.body.lastName || !req.body.firstName || !req.body.ref || !req.body.address) {
      res.send('Les données du formulaire sont incorrectes, sont contenu n\'a pas été soumis.')
    }
    connection.query('INSERT INTO quotes (lastName, firstName, ref, address) values (?, ?, ?, ?)',
      [
        req.body.lastName,
        req.body.firstName,
        req.body.ref,
        req.body.address
      ],
      (err, results, fields) => {
        if (err) {
          console.error(err);
          throw err;
        }
        res.send('yessssss');
      })
  }
}