import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      default: "guest"
    },

    customer: {
      name: String,
      phone: String,
      address: String
    },

    items: [
      {
        productId: String,
        name: String,
        price: Number,
        quantity: Number
      }
    ],

    total: {
      type: Number,
      required: true
    },

    status: {
      type: String,
      default: "pending"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
