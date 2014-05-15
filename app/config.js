var mongoose = module.exports.mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/links');

var urlSchema = module.exports.urlSchema = mongoose.Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number,
  timestamp: {type: Date, default: Date.now}
});

var userSchema = module.exports.userSchema = mongoose.Schema({
  username: String,
  password: String,
  timestamp: {type: Date, default: Date.now}
});
