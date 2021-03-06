const express = require('express')
const getStory = require('./apiComponents/getStoryComponent.js')
const asyncMiddleware = require('./middlewares/asyncMiddleware')
const createUser = require('./apiComponents/userRegistrationComponent')
const getLogin  = require('./apiComponents/userLoginComponent')
const tokenVerify = require('./middlewares/tokenVerification')
//const createStory = require('./apiComponents/createStroy')
const bodyParser = require('body-parser')
require('dotenv').config()

const router = express()
const port = process.env.PORT || process.env.DEV_PORT
var cors = require('cors');



const jsonParser = bodyParser.json()
router.use(cors());



// router.get('/', (req, res) => {
//     res.send('Initial directory online')
// })


// router.post('/createStory', jsonParser, async (req, res) => {
//     const resp = await createStory(req.body)
//     res.json({
//         resp
//     })
// })



router.get('/random_story', asyncMiddleware(async (req, res, next) => {
    const result = tokenVerify(req)
    if(result) {
        const story = await getStory()
        res.send(story)
    } else {
        res.status(404)
    }
    // const story = await getStory()
}))



// router.get('/ambient', (req, res) => {
//     res.send('/ambient directory online')
// })



router.post('/register', jsonParser, async (req, res) => {
    const token = await createUser(req.body)
    res.json({
        token
    })
})



router.post('/login', jsonParser ,async (req, res) => {
    const token = await getLogin(req.body)
    res.json({
        token
    })
})



router.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
