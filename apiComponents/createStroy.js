const db = require('../models/index.js');



const createStory = async ({ username, email, password }) => {
    try {
        await db.story.create({
            title: title,
            author: author,
            body: body
        })
        return "Sucess"
    } catch(e){
        return e
    }
}


module.exports = createStory