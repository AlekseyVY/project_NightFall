const jwt = require('jsonwebtoken')
require('dotenv').config()


const tokenIssue = (username) => {
    const token = jwt.sign({ username: username}, process.env.ACESSTOKENSECRET)
    return token
}


module.exports = tokenIssue