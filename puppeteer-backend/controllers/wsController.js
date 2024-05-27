const { getProducts } = require("../scripts/wsService")

const getWs = async (req, res) => {
    try{
        //Getting listed products
        const products = await getProducts()
        res.status(200).json(products)
    }catch(error){
        console.error("Error retrieving: ", error)
        res.status(500).json("Internal Server Error!")
    }
}

module.exports = {
    getWs,
    
}