var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
  name: { type: String, required: true },
  rut: { type: String, minlength: 12, maxlength: 12, required: true },
  address: String,
  created_at: Date,
  updated_at: Date
});

clientSchema.pre('save', function(next) {
  var currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

var Client = mongoose.model('Client', clientSchema);

module.exports = Client;
