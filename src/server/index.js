const express = require('express');
const os = require('os');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) =>
  res.send({ username: os.userInfo().username }),
);
app.listen(8080, () => console.log('Listening on port 8080!'));
