
const products = require('../products.json');

const getProducts = (req, res) => {
    const { id } = req.params
    const prod = products.find(e =>  e.id == id)
     if(!prod){
        res.status(500).send('Item is not in list')
    } else {
        res.status(200).send(prod)

    }
    
  }

module.exports = getProducts