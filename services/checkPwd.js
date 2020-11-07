const bcrypt = require('bcrypt')



const checkPwd = async (logPwd, storedPwd) => {
    const res = await bcrypt.compare(logPwd, storedPwd)
    return res
}


module.exports = checkPwd