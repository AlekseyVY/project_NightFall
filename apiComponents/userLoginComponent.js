const db = require('../models/index.js');
const checkPwd = require('../services/checkPwd')
const tokenIssue = require('../services/tokenIssue')


const getLogin = async ({ username, password }) => {
    try {
        const res = await db.user.findAll({
            where: {
                username: username
            }
        })


        const checkResult = await checkPwd(password, res[0].dataValues.password)
        if(checkResult === true){
            const token = tokenIssue(username)
            return token
        } else {
            return "wrong username or password"
        }
    } catch(error) {
        return error
    }
}



module.exports = getLogin;