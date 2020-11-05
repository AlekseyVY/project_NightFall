const express = require('express')
const getStory = require('./apiComponents/getStoryComponent.js')
const asyncMiddleware = require('./middlewares/asyncMiddleware')



const router = express()
const port = 3000



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



// router.post('/register', (req, res) => {
//     res.send("/register API endpoint")
// })



// router.get('/login', (req, res) => {
//     res.send("/login API endpoint")
// })



router.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
