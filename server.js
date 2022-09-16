const fs = require('fs')

class Product{
    constructor(title, price){
        this.title = title
        this.price = price
    }
}

module.exports = class Container {
    constructor(name){
        this.name = name

        try{
            this.products = fs.readFileSync(this.name, 'utf-8')
            this.products = JASON.parse(this.products)            
        } catch (error) {
            this.products = []
        }
    }    
    getAll(){
        return this.products
    }

    getById(id){
        try{
            let product = {id}
            for (let i = 0; i < this.products.length; i++){
                if(product.id == this.products[i].id){
                    product = this.products[i]
            }
        }
        return product
        } catch (error){
        return error 
        }
    }
    getRandom(){
        return this.getById(Math.floor(Math.random() * this.products.length) + 1)
    }

    save(title, price){
        try{
            let newProduct = new Product(title, price)
            if (this.products.length == 0){
                newProduct.id = 1
            } else {
                newProduct.id = this.products[this.products.length - 1].id + 1
            }
            this.products.push(newProduct)
            fs.promises.writeFile(this.name, JSON.stringify(this.products, null, '\t'))
            .then(() => console.log('Producto guardado!'))
            .catch(e => console.log(e))
        } catch (error) {
            console.log(error)
        }
    }

    delete(){
        fs.truncateSync(this.name, 0, () => console.log('Contenido Borrado'))
    }

    deleteById(id){
        try{
            for(let i = 0; i < this.product.length; i++){
                if(id == this.products[i].id){
                    this.products.splice(id - 1, 1)
                }
            }
            fs.promises.writeFile(this.name, JSON.stringify(this.products, null, '\t'))
            .then( (e) => console.log(`El producto con ID ${id} ha sido eliminado`))
            .catch(e => console.log(`Error ${e}`))
        } catch (error) {
            return 'Error! ID no existe o ya fue eliminado'
        }
    }
}

/*
const server = http.createServer( (peticion, respuesta) => {
    respuesta.statusCode = 200
    //respuesta.setHeader('Content-Type', 'text/plain')    
    respuesta.end('Hola mundo')
})

const port = 8080

const connectServer = server.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${connectServer.adress().port}`)
})*/

