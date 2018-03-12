//const user = require('./user');

module.exports = (app, passport) => {

    app.get('/', (req, res) => {
        res.send({'Welcome': 'Hello World!'});
    });

    app.get('/test', (req, res) => {
        res.send({'Welcome': 'test'});
    });
    
    require('./user')(app, passport);
    require('./job')(app);

};
