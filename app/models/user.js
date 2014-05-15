var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var userSchema = db.userSchema;

userSchema.pre('save', function(next){
  bcrypt.hash(this.get('password'), null, null, function(hash){
    this.set('password', hash);
    next();
  }.bind(this));
});

userSchema.methods.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
    callback(isMatch);
  });
};

var User = db.mongoose.model('User', userSchema);

module.exports = User;
