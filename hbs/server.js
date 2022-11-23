const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

const personas = []

app.engine('handlebars', handlebars.engine())

app.set('views', './views')
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('form', {personas})
})

app.post('/personas', (req, res) => {
    personas.push(req.body)
    res.redirect('/')
    console.log(personas);
})

app.get('/lista', (req, res) => {
    res.render('historial', {personas})
})








app.listen(8080)