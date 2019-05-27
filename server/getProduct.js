const products = require('../products.json');

const getProduct = (req, res) => {

    //the end goal will be to return the item the user asked for
    //if not available i will return 'doesnt exist'
    //find out what the user is asking for(i will get this from the url)
    //figure out what data im looking through
    

    const item = products.find(product => {
        return product.id === parseInt(req.params.id)});
    if (!item) {
        return res.status(500).send("Item not in list");
    }
    res.status(200).send(item);
}



module.exports = {
    getProduct:getProduct
}
