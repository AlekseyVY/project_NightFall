const express = require('express')
const getStory = require('./apiComponents/getStoryComponent.js')
const asyncMiddleware = require('./middlewares/asyncMiddleware')
const { database } = require('./DB/db')
const createUser = require('./apiComponents/userRegistrationComponent')
const getLogin  = require('./apiComponents/userLoginComponent')

const router = express()
const port = process.env.PORT || 3000



database.authenticate();
console.log('Connection to database established successfully.')





// router.get('/', (req, res) => {
//     res.send('Initial directory online')
// })



// router.get('/home', (req, res) => {
//     res.send('/home directory online')
// })



router.get('/random_story', asyncMiddleware(async (req, res, next) => {
    const story = await getStory()
    res.json(story)
}))



// router.get('/ambient', (req, res) => {
//     res.send('/ambient directory online')
// })



router.post('/register', asyncMiddleware(async (req, res, next) => {
    await createUser()
}))



router.get('/login', asyncMiddleware(async (req, res, next) => {
    const user = await getLogin()
    res.json(user)
}))



router.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
