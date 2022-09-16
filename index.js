const express = require ('express')
const Container = require('./server')
const app = express()
const Container = require('./Container')
const PORT = 8080

const products = new Container('./products.txt')

app.get('/products', (req, res) => {
    res.json(products.getAll())
})

app.listen(PORT, () => console.log('El servidor esta escuchando el puerto 8080'))