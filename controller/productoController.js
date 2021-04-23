
// Requerimos el array de productos
let visitados = require('../data/datosProductos')


let productController = {

    home: (req, res) => {
        console.log('entro al home del produt controller y redirijo')

        res.redirect('/')

    },

// Función que muestra el detalle del producto, cuando hacemos click en la foto
    show: (req, res) => {
        console.log('me hicieron click :' + req.params.id)

        //        let product = visitados.find((value)=>value.id===req.params.id)

        let product = visitados.find(function (value) {
            console.log('me encoraron:' + value.id)
            return value.id === req.params.id
        })

        console.log(product)
        if (product) {
            res.render('detailProduct', { product });
        } else {
            res.render('error404');
        }
    },

// Función que muestra el formulario de crear Productos
    create: (req, res) => {
        console.log('entre a crear')
        res.render('createProduct');
    },
// Función que simula el almacenamiento, en este caso en array
    store: (req, res) => {
        console.log('entre al storess')
        console.log(req.body)
        let producto =
        {
            id: "11",
            name: req.body.name,
            descuento: req.body.descuento,
            price: req.body.price,
            image: "images/img-cafetera-moulinex.jpg"

        }
 //------MUESTRO EL PRODUCTO A AGREGAR EN EL ARRAY       
// Se agrega el registro al array
        visitados.push(producto)
      
        res.redirect('/')
    },

// FUnción que muestra el formulario de edición
    edit: (req, res) => {
        console.log('ESTOY ENTRANDO AL METODO EDIT:')

        let product = visitados.find(function (value) {

            return value.id === req.params.id
        })

        console.log(product)
        if (product) {
            res.render('editProduct', { product });
        } else {
            res.render('error404');
        }
    },

// Función que realiza cambios en el producto seleccionado
    update: (req, res) => {
        console.log('Entré al Update')
        console.log(req.body)

        // Crep una estructura de datos de similares campos que producto del Array Visitados
        // Para asignarle el valor o contenido de los camos que viajarn por el body
        let producto = {

           
            id: req.params.id,
            name: req.body.name,
            descuento: req.body.descuento,
            price: req.body.price,
            image: req.body.image

        }
        console.log(producto)
        console.log('---------------------------------------')
        console.log('me seleccionaron en update :' + req.params.id)

        // En este momento en la variable litaral tengo todos los campos
        // actualizados, entonces recorro rodo el array orifinal
        // Localizo el id que quiero mofificar y procedo a:
        // REEMPLAZAR EL VALOR DE CADA PROPIEDAD-
        // NOTA EL ID DEL ARRAY NO SE MODIFICA


        visitados.forEach(function (i) {
            if (i.id === req.params.id) {
                i.name = producto.name
                i.price = producto.price
                i.descuento = producto.descuento
            }

        })
        console.log(visitados)

// Me voy a la página principal mostrando todos los productos
// y la modificación en el producto en cuestión
        res.redirect('/')
    },

// Función que elimina del Array visitados ek producto seleccionado
    destroy: (req, res) => {
        console.log('entre destroy')
        console.log(req.params.id)


// Recorremos el array visitados y generamos otro, excluyendo el registro
// que deseamos elinimar
        let menorArray = visitados.filter(function (value) {

            return value.id !== req.params.id
        })
        console.log('-------ARRAY NUEVO MENOR')
        console.log(menorArray)
//  Se copia el array que tiene todos menos el eliminado en el array visitados     
        visitados = [...menorArray]
        console.log('----------ARRAY VISITADOS')
// Se observa que el eliminado no pertenece al array     
        console.log(visitados)
 // Ahora se mostrará todo porque los productos los varga de un archivo       
        res.redirect('/')
    },


    cart: (req, res) => {
        res.render('products/cart');
    },

    search: (req, res) => {

        let dataABuscar = req.query
        res.sed(dataABuscar)
    }

}


module.exports = productController
