const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hi IT_er! Long time no see!')
})

app.post('/posts', (req, res) => {
    res.send('Return posts successfully')
  })

app.get('/post/:id', (req, res) => {
    let id = req.params.id;
    res.send(`This is post with id: ${id}`)
  })

app.post('/post/:id', (req, res) => {
    const result = {
        data: req.body,
        message: 'Post created successfully'
    }
    res.send(result);
  })

app.put('/post/:id', (req, res) => {
    const result = {
        data: req.body,
        message: 'Put created successfully'
    }
    res.send(result);
  })

app.patch('/post/:id', (req, res) => {
    const result = {
        data: req.body,
        message: 'Patch created successfully'
    }
    res.send(result);
  })

app.delete('/post/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Deleted post with id: ${id} successfully!`);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})