const jwt = require('jsonwebtoken')



const tokenIssue = (username) => {
    const token = jwt.sign({ username: username}, process.env.ACESSTOKENSECRET)
    return token
}


module.exports = tokenIssue