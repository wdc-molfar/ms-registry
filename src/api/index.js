



const express = require('express');
const CORS = require("cors")
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('../lib/config');
const logger = require('../lib/logger');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swStats = require('swagger-stats');

const swaggerDocument = YAML.load('./oas.yaml');

swaggerDocument.servers[0].url = process.env.HOST || config.api.host;
swaggerDocument.servers[0].description = "";


//const log = logger(config.logger);
const app = express();

app.use(CORS())



app.use(bodyParser.text());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(swStats.getMiddleware({swaggerSpec:swaggerDocument, uriPath:"/metrics", name:"@molfar/ms-registry"}))

/*
 * Routes
 */


app.use('/spec', require('./routes/spec'));


app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// // catch 404
// app.use((req, res, next) => {
//   log.error(`Error 404 on ${req.url}.`);
//   res.status(404).send({ status: 404, error: 'Not found' });
// });

// // catch errors
// app.use((err, req, res, next) => {
//   const status = err.status || 500;
//   const msg = err.error || err.message;
//   log.error(`Error ${status} (${msg}) on ${req.method} ${req.url} with payload ${req.body}.`);
//   res.status(status).send({ status, error: msg });
// });

module.exports = app;
