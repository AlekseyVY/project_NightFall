const { user } = require('../DB/db')
const encryption = require('../services/pwdEncryptionService')



const createUser = async (username="124312", password="123", email="test@mail.com") => {

    const hash = await encryption(password)

    await user.create({
        username: username,
        password: hash,
        email: email
    })
}


module.exports = createUser