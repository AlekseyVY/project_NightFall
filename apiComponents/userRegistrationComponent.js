const encryption = require('../services/pwdEncryptionService')
const db = require('../models/index.js');
const tokenIssue = require('../services/tokenIssue')

const createUser = async ({ username, email, password }) => {
    try {
        const hash = await encryption(password)

        await db.user.create({
            username: username,
            password: hash,
            email: email
        })
        const token = tokenIssue(username)
        return token

    } catch(e){
        return e
    }
}


module.exports = createUser