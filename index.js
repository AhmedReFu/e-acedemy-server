const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT | 5000;


app.use(cors())
app.use(express.json())

const courses = require('./data/Courses.json')
const categories = require('./data/Categories.json')

app.get('/', (req, res) => {
    res.send('e-acedemy server run')
})


app.get('/courses/all', (req, res) => {
    res.send(courses)
})
app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(n => n.id === id)
    res.send(selectedCourse);
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const selectedCategory = courses.filter(n => n.category_id === id)
    res.send(selectedCategory);
})

app.listen(port, () => {
    console.log("Listening port " + port)
});