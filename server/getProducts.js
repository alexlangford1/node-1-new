
const products = require('../products.json');

const getProducts = (req, res) => {
    const {price} = req.query
    if(price){
        const prod = products.filter(e => e.price >= price*1)
        res.status(200).send(prod)
    }
    res.status(200).send(products);
}

module.exports = getProducts;