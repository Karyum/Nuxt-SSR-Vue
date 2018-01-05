const router = require('express').Router();
// const Beers = require('../database/schema.js');

router.get('/fetchBeers', (req, res) => {
  console.log('Im here mate');
  res.end('You got it ');
});

module.exports = router;
