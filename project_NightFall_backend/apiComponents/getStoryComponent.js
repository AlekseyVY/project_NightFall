const { sequelize, story} = require('../DB/index')
sequelize.authenticate();
console.log('Connection established successfully.')

const getStory = async () => {
    const res = await story.findAll()
    return res
}


module.exports = getStory;