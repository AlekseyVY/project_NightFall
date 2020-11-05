const { sequelize, story} = require('../DB/index')
const { Sequelize } = require('sequelize');



sequelize.authenticate();
console.log('Connection established successfully.')



const getStory = async () => {
    const res = await story.findAll({
        order: [ [ Sequelize.fn('RANDOM') ] ]
    })
    return res
}



module.exports = getStory;