const express = require('express');
const keys = require('/config/keys.js');
require('./models/User');

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('we are live on port', PORT);