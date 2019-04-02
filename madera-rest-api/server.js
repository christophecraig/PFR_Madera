const restify = require('restify')
const documentation = require('./data/documentation')
const customers = require('./customers')
const users = require('./data/users')
const ranges = require('./ranges')
const covers = require('./covers')
const frames = require('./frames')
const insulations = require('./insulations')
const woodFrames = require('./woodFrames')
const components = require('./data/components')
const natures = require('./data/natures')

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.pre(restify.pre.sanitizePath());
server.use(restify.plugins.bodyParser({mapParams: true}));

server.get('/doc/:table', documentation.get);

server.get('/customers', customers.get);
server.get('/customers/:id', customers.get);
server.post('/customers/add', customers.add);

server.get('/users', users.get);
server.get('/users/:id', users.get);
server.post('/users/add', users.add);

server.get('/woodFrames', woodFrames.get);
server.get('/woodFrames/:id', woodFrames.get);
server.post('/woodFrames/add', woodFrames.add);

server.get('/insulations', insulations.get);
server.get('/insulations/:id', insulations.get);
server.post('/insulations/add', insulations.add);

server.get('/covers', covers.get);
server.get('/covers/:id', covers.get);
server.post('/covers/add', covers.add);

server.get('/frames', frames.get);
server.get('/frames/:id', frames.get);
server.post('/frames/add', frames.add);


server.get('/ranges', ranges.get);
server.get('/ranges/:id', ranges.get);
server.get('/ranges/:id/components', components.getBy);
server.post('/ranges/add', ranges.add);

server.get('/components', components.get);
server.get('/components/:id', components.get);
server.post('/components/add', components.add);

server.get('/natures', natures.get);
server.get('/natures/:id', natures.get);
server.get('/natures/:id/components', components.getBy);
server.post('/natures/add', natures.add);


// TODO : 404 un peu plus stylée

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});