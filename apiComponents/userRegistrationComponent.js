const encryption = require('../services/pwdEncryptionService')
const db = require('../models/index.js');


const createUser = async (username, password, email) => {

    const hash = await encryption(password)

    await db.user.create({
        username: username,
        password: hash,
        email: email
    })
}


module.exports = createUser