//const user = require('./user');

module.exports = (app) => {

    
    app.get('/', (req, res) => {
        res.send({'Welcome': 'Hello World!'});
    });

    app.get('/test', (req, res) => {
        res.send({'Welcome': 'test'});
    });

    require('./user')(app);
    //app.get('/user', user);

};
