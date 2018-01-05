const express = require('express');
const { Nuxt, Builder } = require('nuxt');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const api = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

app.use(bodyParser.json());
// Import API Routes
app.use('/api', api);

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');

config.dev = !(process.env.NODE_ENV === 'production');

// Init Nuxt.js
const nuxt = new Nuxt(config);

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// setup a connection with the database
mongoose.connect(process.env.DB_URL, {
  useMongoClient: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('connected db');
  // Listen the server
  app.listen(port, () => {
    console.log(8080);
  });
});
