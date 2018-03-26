const AuthUser = require('./authuser');
const AuthCheck = module.exports = (req, res, next) => {
    console.log('run auth check middleware'); 
    req.user = {email: 'remz'};

   // AuthUser = 'test';
    next(); 
}

