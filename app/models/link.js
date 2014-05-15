var db = require('../config');
var crypto = require('crypto');

var urlSchema = db.urlSchema;

urlSchema.pre('save', function(next) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.get('url'));
  this.set('code', shasum.digest('hex').slice(0, 5));
  next();
});

var Link = db.mongoose.model('Link', urlSchema);

module.exports = Link;
