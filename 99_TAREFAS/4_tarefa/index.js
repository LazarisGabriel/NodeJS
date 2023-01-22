const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/iphone', (req, res) => {
    res.render('produtos/iphone')
})

app.get('/galaxy', (req, res) => {
    res.render('produtos/galaxy')
})

app.get('/placa', (req, res) => {
    res.render('produtos/placa')
})

app.get('/', (req, res) => {

    const produtos = [
        {
            name: 'Iphone 14',
            price: 'R$6299.00',
            link: 'iphone'
        },
        {
            name: 'Galaxy S22 Ultra',
            price: 'R$6569.00',
            link: 'galaxy'
        },
        {
            name: 'RTX 3050 Ti',
            price: 'R$6899.00',
            link: 'placa'
        }
    ]

    res.render('home', { produtos })
})

app.listen(3000, () => {
    console.log('App funcionando!')
})