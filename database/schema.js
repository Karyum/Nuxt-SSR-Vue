const mongoose = require('mongoose');

const beersSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
  },
});

const Beers = mongoose.model('Beers', beersSchema);

module.exports = Beers;
