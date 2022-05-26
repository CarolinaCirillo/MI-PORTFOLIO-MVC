const about= {
    title: 'Restaurant',
    description: 'El más rico de Buenos Aires',
    history: 'Creado hace 50 años',
    menu: 'Menu del día'
}

const menuDelDia = [{
   id: 1,
   title: 'Carpaccio fresco',
   description: 'Entrada',
   price:'us$ 5' 
 },
{
    id: 2,
   title: 'Ñoquis con salsa rosa',
   description: 'Primer plato',
   price:'us$ 5' 

},
{
    id: 3,
    title: 'Rabas con pure',
    description: 'Primer plato',
    price:'us$ 5' 
 
},
{
    id: 4,
    title: 'pure de zapallo con pollo',
    description: 'Primer plato',
    price:'us$ 5' 
 
},
{
    id: 5,
    title: 'Asado con fritas',
    description: 'Primer plato',
    price:'us$ 5' 
 
},

]
const mainController = {

    index: (req,res) => {
        res.render('index', {about: about, menu:menuDelDia });
    },
    detalle: (req,res) => {
        let plato =menuDelDia.find( plato => plato.id == req.params.menuId )
        console.log(plato);
        res.render('detalleMenu', {plata: plato});
    }

}

module.exports= mainController;