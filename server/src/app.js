/**
 * main server application
 * @author: Arie M. Prasetyo (2020)
 */
const bodyParser = require("body-parser");
const express = require('express');
const Show = require('./models/shows');

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (_, res) => {
  res.json({msg: `This is API server. Format "/api/v1/<collection name>"`});
});

// API endpoints for show collection
app.get('/api/v1/shows', async (_, res) => {
  const shows = await Show.find({});
  res.json(shows);
});

app.post('/api/v1/shows', async (req, res) => {
  const show = new Show({
    name: req.body.name
  });

  const savedShow = await show.save();
  res.json(savedShow);
});

// export app
module.exports = app;
