const { Sequelize } = require('sequelize');
const db = require('../models/index');

const getStory = async () => {
    const res = await db.story.findAll({
        order: [ [ Sequelize.fn('RANDOM') ] ],
        limit: 1
    })
    return res
}



module.exports = getStory;