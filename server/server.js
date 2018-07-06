const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

const compiler = webpack(webpackConfig)
const app = express();
// Replace with your mongoLab URI
const MONGO_URI = 'mongodb://127.0.0.1:27017';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

app.use(webpackMiddleware(compiler, {
  publicPath: webpackConfig.output.path,
  stats: { colors: true }
}));
app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
	useMongoClient: true 
})
.then((result) => console.log('Connected'))
.catch((err) => console.log('Error', err))

module.exports = app;
