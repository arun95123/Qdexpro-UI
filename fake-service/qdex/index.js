'use strict';
const {getScenarioStub} = require('../stubs/scenario.js')
const express = require('express');
const app = express();

app.get('/check',(req,res) => {
  res.status(200).send(getScenarioStub());
});

module.exports = app;
