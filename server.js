const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

const app = express();
const port = 8080;

app.use(bodyParser.json()); // convert request body to Json format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


  app.use(compression())

  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });



app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

