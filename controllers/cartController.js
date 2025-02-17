import userModel from "../models/userModel.js";

//Add to cart for user

const addToCart = async (req, res) => {
  try {
    let userdata = await userModel.findById(req.body.userId);
    let cartData = await userdata.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, {
      cartData,
    });
    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// remove items from cart

const removeItemCart = async (req, res) => {
  try {
    let userdata = await userModel.findById(req.body.userId);
    let cartData = await userdata.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, {
      cartData,
    });
    res.json({ success: true, message: "Removed from Cart" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// fetch user cart data

const getCart = async (req, res) => {
  try {
    let userdata = await userModel.findById(req.body.userId);
    let cartData = await userdata.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, removeItemCart, getCart };
