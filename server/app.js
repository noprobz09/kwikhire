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

    function authChecker(req, res, next)
    {
        console.log(req.headers);
        
        if(req.headers.authorization)
        {
            console.log(req.headers.authorization.split(" ")[1]);
            const User = require('./models/User');
    
            User.findOne({ '_id': req.headers.authorization.split(" ")[1] }, function (err, person) {
                if (err) return handleError(err);
                // Prints "Space Ghost is a talk show host".
                console.log(person);
            });
        }
        
        next();
    }

    const AuthCheck = require('./middleware/auth');
    app.use(AuthCheck);
    require('./routes/index')(app); // load our routes and pass in our app and fully configured passport

    const PORT = process.env.PORT || 5000;
    app.listen(PORT);