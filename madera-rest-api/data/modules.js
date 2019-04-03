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
    if (!req.body.name || !req.body.id_natures || !req.body.id_ranges || !req.body.id_models) {
      res.send('Les données du formulaire sont incorrectes, sont contenu n\'a pas été soumis.')
    }

    connection.beginTransaction(function (err) {
      if (err) {
        throw err;
      }
      connection.query('INSERT INTO modules (name, id_natures) values (?, ?)',
      [
        req.body.name,
        req.body.id_natures,
      ], 
      (error, results, fields) => {
        if (error) {
          return connection.rollback(function () {
            throw error;
          });
        }

        let lastId = results.insertId

        connection.query('INSERT INTO modules_per_range_per_quote (id_ranges, id_modules, id_quotes) values (?, ?, ?)', 
        [
          req.body.id_ranges,
          lastId,
          req.body.id_quotes,
        ], 
        (error, results, fields) => {
          if (error) {
            return connection.rollback(function () {
              throw error;
            });
          }

          connection.query('INSERT INTO modules_per_model (id_modules, id_models) values (?, ?)',
          [
            lastId,
            req.body.id_models,
          ], 
          (error, results, fields) => {
            if (error) {
              return connection.rollback(function () {
                throw error;
              });
            }

            connection.commit(function (err) {
              if (err) {
                return connection.rollback(function () {
                  throw err;
                });
              }
            });
          });
        });
      });
    });
  }
}