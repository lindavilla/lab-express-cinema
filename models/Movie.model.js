const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Movie = mongoose.model('Movie', Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String]
  }));

module.exports = Movie;



