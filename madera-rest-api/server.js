const restify = require('restify')
const customers = require('./data/customers')
const users = require('./data/users')
const ranges = require('./data/ranges')
const covers = require('./data/covers')
const frames = require('./data/frames')
const insulations = require('./data/insulations')
const woodFrames = require('./data/woodFrames')
const components = require('./data/components')
const componentTypes = require('./data/componentTypes')
const models = require('./data/models')
const modules = require('./data/modules')
const cuts = require('./data/cuts')
const quotes = require('./data/quotes')
const units = require('./data/units')
const technicalClauses = require('./data/technicalClauses')
const specifications = require('./data/specifications')
const natures = require('./data/natures')

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.pre(restify.pre.sanitizePath());
server.use(restify.plugins.bodyParser({
  mapParams: true
}));

const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*'],
})

server.pre(cors.preflight)
server.use(cors.actual)

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
server.get('/ranges/:id/modules', modules.getBy);
server.post('/ranges/add', ranges.add);

server.get('/components', components.get);
server.get('/components/:id', components.get);
server.post('/components/add', components.add);

server.get('/modules', modules.get);
server.get('/modules/:id', modules.get);
server.post('/modules/add', modules.add);

server.get('/models', models.get);
server.get('/models/:id', models.get);
server.get('/models/:id/modules', modules.getBy);
server.post('/models/add', models.add);

server.get('/natures', natures.get);
server.get('/natures/:id', natures.get);
server.get('/natures/:id/components', components.getBy);
server.post('/natures/add', natures.add);


// TODO : 404 un peu plus stylée

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});