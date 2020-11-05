const bcrypt = require('bcrypt')



const encryption = async (password) => {
    const salt = 10;
    const hashedPwd = await bcrypt.hash(password, salt)
    return hashedPwd
}



module.exports = encryption