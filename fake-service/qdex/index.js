'use strict';
const {getScenarioStub} = require('../stubs/scenario.js');
const {getSeleniumScript} = require('../stubs/seleniumScript.js');
const express = require('express');
const app = express();

app.get('/check',(req,res) => {
  res.status(200).send(getScenarioStub());
});

app.get('/script',(req,res) => {
  res.status(200).send(getSeleniumScript(req.query.control));
});

app.post('/postScenario',(req,res) => {
  console.log("posted to service");
  res.status(200).send();
});

module.exports = app;
