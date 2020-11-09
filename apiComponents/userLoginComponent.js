const db = require('../models/index.js');
const checkPwd = require('../services/checkPwd')
const tokenIssue = require('../services/tokenIssue')


const getLogin = async ({ username, password }) => {

        const res = await db.user.findAll({
            where: {
                username: username
            }
        })
        return res.data[0].password

        const checkResult = await checkPwd(password, res[0].dataValues.password)
        if(checkResult === true){
            const token = tokenIssue(username)
            return token
        } else {
            return "wrong username or password"
        }
}



module.exports = getLogin;