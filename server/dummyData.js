var mongoose = require('mongoose');
var serverConfig = require('./src/config');



// MongoDB Connection
mongoose.connect(serverConfig.dbUrl, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  var Client = require('./src/model/client.model');
  var Invoice = require('./src/model/invoice.model');

  // var c1 = new Client({"name": "Odaler", "rut": "213227890217", "address": "Av. de la Playa 2321"});
  //   c1.save(function(err, client) {
  //   if (err) console.log(err);
  // });
  // c1 = new Client({"name": "Disco", "rut": "213227490017", "address": "Av. de la Playa 2321"});
  // c1.save(function(err, client) {
  //   if (err) console.log(err);
  // });
  // c1 = new Client({"name": "Tienda Inglesa", "rut": "213527890017", "address": "Av. de la Playa 2321"});
  // c1.save(function(err, client) {
  //   if (err) console.log(err);
  // });
  // c1 = new Client({"name": "Devoto", "rut": "213265890017", "address": "Av. de la Playa 2321"});
  // c1.save(function(err, client) {
  //   if (err) console.log(err);
  // });
  // c1 = new Client({"name": "Tiendas Montevideo", "rut": "217627890017", "address": "Av. de la Playa 2321"});
  // c1.save(function(err, client) {
  //   if (err) console.log(err);
  // });
  // c1 = new Client({"name": "Ancers", "rut": "218787890017", "address": "Av. de la Playa 2321"});
  // c1.save(function(err, client) {
  //   if (err) console.log(err);
  // });
  // c1 = new Client({ "name": "Coral", "rut": "213229880017", "address": "Av. de la Playa 2321"});
  // c1.save(function(err, client) {
  //   if (error) console.log(err);
  // });
  // c1 = new Client({"name": "Rosada", "rut": "213227894417", "address": "Av. de la Playa 2321"});
  // c1.save(function(err, client) {
  //   if (err) console.log(err);
  // });
  // c1 = new Client({"name": "Fostix", "rut": "213227890017", "address": "Av. de la Playa 2321"});
  // c1.save(function(err, client) {
  //   if (err) console.log(err);
  // });
  // c1 = new Client({"name": "HUV", "rut": "213227891117", "address": "Av. de la Playa 2321"});
  // c1.save(function(err, client) {
  //   if (err) console.log(err);
  // });
  // c1 = new Client({"name": "PARPI", "rut": "213227530017", "address": "Av. de la Playa 2321"});
  // c1.save(function(err, client) {
  //   if (err) console.log(err);
  // });
  // c1 = new Client({"name": "AMELUX", "rut": "213227895017", "address": "Av. de la Playa 2321"});
  // c1.save(function(err, client) {
  //   if (err) console.log(err);
  // });

  var i1 = new Invoice({ "id": 1, "name": "Disco Fin de año", "client": { "id": 1, "name": "DISCO S.A"}, "number": 1765, "date": "2017-01-10 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 2, "name": "Disco Fin de año", "client": { "id": 1, "name": "DISCO S.A"}, "number": 17657, "date": "2017-01-10 19:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 3, "name": "Disco Fin de año", "client": { "id": 2, "name": "DEVOTO HNOS."}, "number": 13243454, "date": "2017-01-08 22:00:00", "dateBilled": "2017-01-10 22:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });
  i1 = new Invoice({ "id": 4, "name": "Disco Fin de año", "client": { "id": 1, "name": "DISCO S.A"}, "number": 1232, "date": "2017-01-10 22:00:00", "dateBilled": "2017-02-10 10:00:00"});
  i1.save(function(err, invoice) {
    if (err) console.log(err);
  });



});



