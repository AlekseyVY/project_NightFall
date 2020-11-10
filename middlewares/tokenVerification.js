const jwt = require('jsonwebtoken')



const tokenVerify = (req) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];

    const result = jwt.verify(token, 'supersecretpasswordissuetokenizationbadassprogrammerwtf')
    return result
}


module.exports = tokenVerify