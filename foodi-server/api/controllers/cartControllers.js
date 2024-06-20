const Carts = require("../models/Carts");


const getCartByEmail = async(req, res) =>{
    try {
        const email = req.query.email;
        const query={email:email};
        const result = await Carts.find(query).exec();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
//post a cart when add-to-cart btn clicked
const addToCart = async(req,res) =>{
     const {menuItemId, name, recipe, image, price, quantity,email} = req.body;
     try {
        const existingCartItem = await Carts.findOne({menuItemId});
        if(existingCartItem){
            return res.status(400).json({message:"Product already exists in the cart!"});
        }
        const cartItem = await Carts.create({
            menuItemId, name, recipe, image, price, quantity,email
        })
        res.status(201).json(cartItem)
     } catch (error) {
        res.status(500).json({message:error.message});
     }
    }

    // delete a cart
const deleteCart = async (req, res) => {
    const cartId = req.params.id;
    try {
      const deletedCart = await Carts.findByIdAndDelete(cartId);
  
      if (!deletedCart) {
        return res.status(404).json({ message: "Cart Items not found" });
      }
  
      res.status(200).json({ message: "Cart Items Deleted Successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  // update cart quantity
const updateCart = async (req, res) => {
    const cartId = req.params.id;
    const { name, recipe, image, price, email, quantity, menuItemId } = req.body;
    try {
      const updatedCart = await Carts.findByIdAndUpdate(
        cartId,
        { name, recipe, image, price, email, quantity, menuItemId },
        { new: true, runValidators: true }
      );
  
      if (!updatedCart) {
        return res.status(404).json({ message: "Cart Item not found" });
      }
  
      res.status(200).json(updatedCart);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // get a single cart items

const getSingleCart = async (req, res) => {
    const cartId = req.params.id;
    try {
      const cartItem = await Carts.findById(cartId);
  
      if (!cartItem) {
        return res.status(404).json({ message: "Cart Item not found" });
      }
  
      res.status(200).json(cartItem);
    } catch (error) {
      res.status(500).json({ message: "Cart Item not found" });
    }
  };

module.exports={
    getCartByEmail,
    addToCart,
    deleteCart,
    updateCart,
    getSingleCart
}