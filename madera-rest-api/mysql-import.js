import data from './data.js';

console.log(data.insulations);
import { createConnection } from 'mysql';
const connection = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bibli'
})

// connection.query('')