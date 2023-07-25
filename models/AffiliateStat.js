import mongoose from "mongoose";

/**
 * @description This file contains the Mongoose schema and model for the affiliate stats of users
 * @author [Hoang Le Chau](https://github.com/hoanglechau)
 */
const AffiliateStatSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);
export default AffiliateStat;
