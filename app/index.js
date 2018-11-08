const path = require('path');
const express = require('express');
const exphbs =require('express-handlebars');
const router = require('./router');
const bodyParser=require('body-parser');
const app = express();

const isDeveloping = process.env.NODE_ENV !== 'production';

app.use(express.static(path.join(__dirname, '..', '/dist')));

app.engine('.html', exphbs({
  defaultLayout: 'layout',
  extname: '.html'
}));
app.set('view engine', '.html');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use('/',router);

app.get('/*', function response(req, res) {
  res.render('home');
});

module.exports = app;
