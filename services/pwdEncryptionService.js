const bcrypt = require('bcrypt')



const encryption = async (password) => {
    const hashedPwd = await bcrypt.hash(password, process.env.SALT_ROUNDS)
    return hashedPwd
}



module.exports = encryption