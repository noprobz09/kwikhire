const AuthCheck = module.exports = (req, res, next) => {
    console.log('run auth check middleware');   
    next(); 
}

const AuthUser = null;


