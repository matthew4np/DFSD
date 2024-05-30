//Create a 2D array to represent types of products in rows and their properties (name, price, quantity) in columns.
var typesOfProducts = [
    ['typeA', 'nameA', 'priceA', 'quantityA'],
    ['typeB', 'nameB', 'priceB', 'quantityB']
]

//Update the inventory quantity for a product and p
typesOfProducts[1][3] = 'quantityC';

//rint the updated inventory.
console.log(typesOfProducts);