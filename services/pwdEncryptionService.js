const bcrypt = require('bcrypt')



const encryption = async (password) => {
    const hashedPwd = await bcrypt.hash(password, 10)
    return hashedPwd
}



module.exports = encryption