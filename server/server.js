const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// create express app
const app = express();

// Cors
const corsOptions = {
    origin: '*'
  }

app.use(cors())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Person application."});
});
// Require Person routes
require('./app/routes/person.routes.js')(app);
// listen for requests
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});