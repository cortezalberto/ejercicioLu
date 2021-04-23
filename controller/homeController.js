

let visitados = require('../data/datosProductos')

let homeController = {


    show: (req, res) => {
        console.log('Soy Home Contoller - Leo productos desde el Array')
     
//  PARA PRACTICAR COPIA DE ARRAY - operador Spread   el de los 3 puntitos
 //     Se copia el array que tiene todos los productos "visitados"
 // en el array auxiliar products y se renderiza la vista, pasándolo como parámetro (ponele)
      const products = [... visitados]
    
        res.render('home', { products });
      

    }
// Nota convertir la función a Función flecha
    
}

module.exports = homeController

