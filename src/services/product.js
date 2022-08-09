const fs = require('fs');


const readProducts = () => {

    const products = fs.readFileSync(__dirname + '/../database/products.json');

    console.log('productos leidos con exito');

    return JSON.parse(products);

}

const readProduct = (id) => {

    const products = readProducts();

    const product = products.filter((p) => p.id == id);

    return product;

}

const createProduct = (product) => {

    const products = readProducts();

    const lastProductId = products[products.length - 1].id;

    products.push({
        id: lastProductId + 1,
        ...product
    });

    fs.writeFileSync(__dirname + '/../database/products.json', JSON.stringify(products));
    console.log('producto creado con exito');

}


module.exports = {
    readProducts,
    readProduct,
    createProduct
}