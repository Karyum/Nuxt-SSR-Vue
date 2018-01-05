const router = require('express').Router();
const Beers = require('../database/schema.js');

router
  .route('/beers')
  .get((req, res) => {
    Beers.find({}, (err, result) => {
      if (err) res.end(null);
      res.end(JSON.stringify(result));
    });
  })
  .post(({ body }, res) => {
    const newBeer = new Beers({
      name: body.name,
      img: body.img,
    });

    newBeer.save((err, result) => {
      if (err) res.end(err);
      res.end(JSON.stringify(result));
    });
  });

module.exports = router;
