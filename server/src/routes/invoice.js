
var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var pdfUtil = require('../util/pdf');

var Invoice = require('../model/invoice.model');


function find(req, res, next) {
  Invoice.find({})
    .populate('client')
    .exec(function(err, data) {
      if (!err) {
        res.status(200).send(data);
      }
  });
}

function findById(req, res, next) {
  res.status(200).send("{}");
}

function create(req, res, next) {
  if (!req.body.name || !req.body.number || !req.body.date) {
    res.status(403).end();
  }
  var invoice = new Invoice(req.body);
  invoice.save(function (err, saved) {
    console.log(err);
    if (!err) {
      res.status(200).send({invoice: saved});
    } else {
      res.status(500).send(err);
    }
  });
}



function printPdf(req, res, next) {
  if (!req.params.id) {
    res.status(403).end();
  }
  Invoice.find({ _id: ObjectId(req.params.id)})
    .populate('client')
    .exec(function(err, data) {
      if (!err && data.length > 0) {
        var invoice = data[0];
        var filename = pdfUtil.generateFileName(invoice);
        filename += filename.endsWith(".pdf") ? "" : ".pdf";
        res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
        res.setHeader('Content-type', 'application/pdf');
        var doc = pdfUtil.generatePdf(invoice);
        doc.pipe(res);
        doc.end();
      }
    });
}

router.get('/', find);
router.get('/:id/print', printPdf);
router.get('/:id', findById);
router.post('/', create);

module.exports = router;
