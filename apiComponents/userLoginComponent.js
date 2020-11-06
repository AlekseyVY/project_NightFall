const db = require('../models/index.js');


const getLogin = async () => {
    const res = await db.user.findAll()
    return res
}



module.exports = getLogin;