const db = require('../models/index.js');
const checkPwd = require('../services/checkPwd')



const getLogin = async ({ username, password }) => {
    try {
        const res = await db.user.findAll({
            where: {
                username: username
            }
        })



        const checkResult = await checkPwd(password, res[0].dataValues.password)
        console.log(checkResult)
        if(checkResult === true){
            //return JWT from here
            return res
        } else {
            return "error wrong username or password"
        }
    } catch(error) {
        return "wrong username or password"
    }
}



module.exports = getLogin;