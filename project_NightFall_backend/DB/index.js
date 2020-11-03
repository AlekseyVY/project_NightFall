const { Sequelize, DataTypes, Model } = require('sequelize');


const sequelize = new Sequelize('stories', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
  }
});



const story = sequelize.define('story', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})







// const story_1 =  story.create({
//   title: "Ali Ba Ba abd the fourthy thiefes",
//   author: "Arabians",
//   description: "Cool story about brave arab",
//   body: "She had not waited long before the captain of the robbers got up, opened the window, and, finding no light and hearing no noise or any one stirring in the house, gave the appointed signal, by throwing little stones, several of which hit the jars, as he doubted not by the sound they gave. He then listened, but not hearing or perceiving anything whereby he could judge that his companions stirred, he began to grow very uneasy, threw stones again a second and also a third time, and could not comprehend the reason that none of them should answer his signal. Much alarmed, he went softly down into the yard, and going to the first jar, while asking the robber, whom he thought alive, if he was in readiness, smelt the hot boiled oil, which sent forth a steam out of the jar. Hence he knew that his plot to murder Ali Baba and plunder his house was discovered. Examining all the jars, one after another, he found that all his gang were dead; and, enraged to despair at having failed in his design, he forced the lock of a door that led from the yard to the garden, and climbing over the walls made his escape."
// })

// let stories
// (async () => {
//   stories = await story.findAll()
// })()


module.exports = {
  sequelize, story
};