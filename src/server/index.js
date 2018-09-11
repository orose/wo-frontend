const express = require('express');
const os = require('os');
const morgan = require('morgan');

const customers = require('./customers');
const workorders = require('./workorders');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use('/api/customers', customers);
app.use('/api/workorders', workorders);
app.get('/api/getUsername', (req, res) =>
  res.send({ username: os.userInfo().username }),
);
app.listen(8080, () => console.log('Listening on port 8080!'));
