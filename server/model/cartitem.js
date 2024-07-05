const mongoose = require("mongoose")
const schema = mongoose.Schema

const CartItem = new schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    item:{
        type:Object,
        required:true,
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
})
const cartitem = mongoose.model("cartdata",CartItem)
module.exports= cartitem