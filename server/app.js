 const express = require('express');
 const mongoose = require('mongoose');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 
 const config = require('./config');

 mongoose.connect(config.database);
 
 const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function(){
    console.log('Connected to MongoDB');
 });
 
 const app = express();

 const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
 };

 app.use(cors(corsOptions));
 
 // Prettyfy JSON
 app.set('json spaces', 40);

 // Body parser middleware
 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }));

 // parse application/json
 app.use(bodyParser.json());

 //routes
 require('./routes/index')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);