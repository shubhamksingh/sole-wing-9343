const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: { type: String, reqired: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount : {type : Number, required : true},
    address :  {type : Object, required : true},
    status : {type : String, default: 'pending'}
  },
  { timeStamps: true },
);

module.exports = mongoose.model("order", orderSchema);
