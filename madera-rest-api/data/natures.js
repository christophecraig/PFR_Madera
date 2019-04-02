const connection = require('../mysqlConnexion').connection

module.exports = {
  get(req, res, next) {
    if (req.params.id) {
      connection.query('SELECT * from natures where id = ?', req.params.id, (err, results, fields) => {
        res.json(err ? err : results[0]);
      });
    } else {
      connection.query('SELECT * from natures', (err, results, fields) => {
        console.log(results)
        res.json(err ? err : results);
      });
    }
    next()
  },
  add(req, res, next) {
    if (!req.body.lastName || !req.body.firstName || !req.body.ref || !req.body.address) {
      res.send('Les données du formulaire sont incorrectes, sont contenu n\'a pas été soumis.');
    }
    connection.query('INSERT INTO natures (lastName, firstName, ref, address) values (?, ?, ?, ?)',
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
      }
    )
  }
}