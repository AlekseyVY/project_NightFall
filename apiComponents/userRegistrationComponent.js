const encryption = require('../services/pwdEncryptionService')
const db = require('../models/index.js');
const getLogin = require('../apiComponents/userLoginComponent')

const createUser = async ({ username, email, password }) => {
    try {
        const hash = await encryption(password)

        await db.user.create({
            username: username,
            password: hash,
            email: email
        })

        const token = await getLogin(username, password)
        return token
        
    } catch(e){
        return e
    }
}


module.exports = createUser