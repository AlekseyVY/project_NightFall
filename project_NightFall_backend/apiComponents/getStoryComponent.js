const { story } = require('../DB/db')
const { Sequelize } = require('sequelize');



const getStory = async () => {
    const res = await story.findAll({
        order: [ [ Sequelize.fn('RANDOM') ] ],
        limit: 1
    })
    return res
}



module.exports = getStory;