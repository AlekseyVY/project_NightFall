const express = require('express')
const getStory = require('./apiComponents/getStoryComponent.js')
const asyncMiddleware = require('./middlewares/asyncMiddleware')
const createUser = require('./apiComponents/userRegistrationComponent')
const getLogin  = require('./apiComponents/userLoginComponent')
const bodyParser = require('body-parser')

const router = express()
const port = process.env.PORT || 3000



const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })



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



router.post('/register', jsonParser,  async (req, res) => {
    console.log(req.body)
    await createUser(req.body)
})



router.get('/login', asyncMiddleware(async (req, res, next) => {
    const user = await getLogin()
    res.json(user)
}))



router.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
