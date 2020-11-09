const jwt = require('jsonwebtoken')



const tokenIssue = (username) => {
    const token = jwt.sign({ username: username}, 'supersecretpasswordissuetokenizationbadassprogrammerwtf')
    return token
}


module.exports = tokenIssue