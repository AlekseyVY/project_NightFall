const { user } = require('../DB/db')
const encryption = require('../services/pwdEncryptionService')



const createUser = async (username, password, email) => {

    const hash = await encryption(password)

    await user.create({
        username: username,
        password: hash,
        email: email
    })
}


module.exports = createUser