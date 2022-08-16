const  Cart = require ("../models/Cart");


async function verifyCart(req, res, next) {
    const user = req.user.id 
    const existCart = await Cart.findOne({idUser:user})
     if(!existCart){
        Cart.create({idUser:user, products:[]})
    .then()
    .catch(e=> res.json({msg:e.message}))
    next()
    }else{
        next()
    }
}

module.exports = {verifyCart}