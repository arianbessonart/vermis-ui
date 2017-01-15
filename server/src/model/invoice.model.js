var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InvoiceItemSchema = new Schema({
  name: { type: String, required: true },
  quantity: {type: Number, default: 1},
  amount: Number
});

var invoiceSchema = new Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  client: { type: Schema.Types.ObjectId, ref: 'Client' },
  date: { type: Date, required: true },
  items: [InvoiceItemSchema],
  total: Number,
  status: { type: String, enum: ['pending', 'charged', 'canceled']},
  dateBilled: Date,
  created_at: Date,
  updated_at: Date
});

invoiceSchema.pre('save', function(next) {
  var currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

var Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
