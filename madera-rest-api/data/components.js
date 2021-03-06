const connection = require('../mysqlConnexion').connection

module.exports = {
  get(req, res, next) {
    if (req.params.id) {
      connection.query('SELECT * from components where id=?', req.params.id, (err, results, fields) => {
        res.send(err ? err : results[0])
      });
    } else {
      connection.query('SELECT * from components', (err, results, fields) => {
        res.json(err ? err : results);
      });
    }
    next()
  },
  getBy(req, res, next) {
    const resource = req._url.path.split('/', 2).pop()
    let sql = '';
    switch (resource) {
      case 'units' :
        sql = 'SELECT * FROM `components` WHERE `id_units` = ?';
        break;
      case 'natures' : 
        sql = 'SELECT * FROM `components` WHERE `id_natures` = ?';
        break;
      default:
        sql = '';
        break;
    }
    if (sql) {
      connection.query(sql, req.params.id, (err, results, fields) => {
        res.json(err ? err : results);
      })
    }
  },
  add(req, res, next) {
    if (!req.body.name || !req.body.id_units || !req.body.id_natures) {
      res.send('Les données du formulaire sont incorrectes, sont contenu n\'a pas été soumis.')
    }
    // @TODO: arguments de la requête SQL à modifier
    connection.query('INSERT INTO components (name, id_units, id_natures) values (?, ?, ?)',
    [
      req.body.name, 
      req.body.id_units, 
      req.body.id_natures,
    ], 
    (err, results, fields) => {
      if (err) {
        console.error(err);
        // throw err;
      }
      res.send('yessssss');
    })
  }
}