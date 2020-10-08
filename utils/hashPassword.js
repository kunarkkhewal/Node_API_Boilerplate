const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
    if(password.length < 8){
        throw {message: `Password must be 8 character long`}
    }
    
    return bcrypt.hash(password, 10);
}

module.exports = hashPassword