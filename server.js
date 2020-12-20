const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // easy to work with path and directries
const http = require('http');
const app = express();

const api = require('./server/routes/api')

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//server static files
app.use(express.static(path.join(__dirname, 'dist/postnow-app')));

//set our api routes
app.use('/api', api);

//Serve static files
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/postnow-app/index.html'));
})

//set port
const port = process.env.PORT || '3000';
app.set('port', port);

//create http server
const server = http.createServer(app);

server.listen(port, () => {
  console.log('Ruuning on localhost:', port);
});
