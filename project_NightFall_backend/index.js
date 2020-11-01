const express = require('express')
const app = express()
const port = 3000





app.get('/', (req, res) => {
    res.send('Initial directory online')
})

app.get('/home', (req, res) => {
    res.send('/home directory online')
})

app.get('/random_story', (req, res) => {
    res.send('/random_story directory online')
})

app.get('/ambient', (req, res) => {
    res.send('/ambient directory online')
})

app.post('/register', (req, res) => {
    res.send("/register API endpoint")
})

app.get('/login', (req, res) => {
    res.send("/login API endpoint")
})


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})