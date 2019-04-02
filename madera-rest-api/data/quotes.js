const connection = require('../mysqlConnexion').connection

module.exports = {
  get(req, res, next) {
    if (req.params.id) {
      connection.query('SELECT * from quotes where id=?', req.params.id, (err, results, fields) => {
        res.send(err ? err : results[0])
      });
    } else {
      connection.query('SELECT * from quotes', (err, results, fields) => {
        res.json(err ? err : results);
      });
    }
    next()
  },
  getBy(req, res, next) {
    const resource = req._url.path.split('/', 2).pop()
    let sql = ''
    switch (resource) {
      case 'customers' : 
          sql = 'SELECT * from quotes inner join quotes_per_client_by_user on quotes_per_client_by_user.id_quotes = quotes.id where quotes_per_client_by_user.id_clients = ?';
        break;
      case 'users' : 
          sql = 'SELECT * from quotes inner join quotes_per_client_by_user on quotes_per_client_by_user.id_quotes = quotes.id where quotes_per_client_by_user.id_users = ?';
        break;
      case 'states' : 
          sql = 'SELECT * from quotes where id_states = ?';
        break;
      default : 
        break;
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