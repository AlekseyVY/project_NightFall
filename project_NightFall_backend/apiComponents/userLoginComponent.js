const { user } = require('../DB/db')



const getLogin = async () => {
    const res = await user.findAll()
    return res
}



module.exports = getLogin;