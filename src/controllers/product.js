const { readProducts, readProduct, createProduct, deleteProduct, productExists } = require("../services/product")


const getAll = (req, res) => {

    const products = readProducts();

    if (products.length <= 0) {
        return res.status(404).json({
            status: 'error',
            message: 'no products found'
        });
    }

    return res.status(200).json(products);

}

const getOne = (req, res) => {

    const { id } = req.params;

    if (id == null || id == "null") {
        return res.status(400).json({
            status: 'error',
            message: 'provide a valid product id'
        });
    }

    const product = readProduct(id);

    if (product.length == 0) {
        return res.status(404).json({
            status: 'error',
            message: 'product not found'
        });
    }

    return res.status(200).json(product);

}

const create = (req, res) => {

    const { name, price, description } = req.body;

    console.log(name, price);

    const product = {
        name,
        price,
        description
    }

    createProduct(product);

    return res.status(201).json({
        status: 'success',
        message: 'product created'
    });

}

const update = (req, res) => {

}

const deleteOne = (req, res) => {

    const { id } = req.params;

    if (!productExists(id)) {
        return res.status(404).json({
            status: 'error',
            message: 'product not found'
        });
    }

    deleteProduct(id);

    return res.status(200).json({
        status: 'success',
        message: 'product deleted'
    });

}

const getAllWithView = (req, res) => {

    const products = readProducts();

    return res.render('products', {
        productos: products
    });

}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne,
    getAllWithView
}
