const products = require('../products.json');

const getProducts = (req, res) => {
    if (req.query.price) {
        const items = products.filter(val => val.price >= parseInt(req.query.price));
        return res.status(200).send(items);
    }
    res.status(200).send(products);
}

module.exports = getProducts


    //if there is a price entered
    //return the products that cost more of the same.
    //query received as strings
    //prices in objects are numbers
    //i need to conver strings to number ----- parseInt
    //if not, sent all products


    // let item = products.filter(product => {
    //     if(products.price >= req){
    //         return res.status(200).send(products)
    //     } else {
    //         res.status(200).send(products)
    //     }
    // })






 


