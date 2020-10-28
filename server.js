const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Parser
app.use(bodyParser.json());

// Route
const indexRoute = require('./routes/index');
const authRout = require('./routes/auth');

app.use('/', indexRoute);
app.use('/', authRout);

// PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => { console.log(`Server running on PORT ${PORT}`) });