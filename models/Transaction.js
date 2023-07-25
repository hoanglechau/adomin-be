import mongoose from "mongoose";

/**
 * @description This file contains the Mongoose schema and model for the transactions of the store
 * @author [Hoang Le Chau](https://github.com/hoanglechau)
 */
const TransactionSchema = new mongoose.Schema(
  {
    userId: String,
    cost: String,
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
