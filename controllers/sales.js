import OverallStat from "../models/OverallStat.js";

/**
 * @description This file contains the controllers for the sales endpoints
 * @author [Hoang Le Chau](https://github.com/hoanglechau)
 */

/**
 * @description Get all sales data
 * @param {*} req
 * @param {*} res
 * @route GET /sales/sales
 * @access Public
 */
export const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();
    // Only sending the first version of 2021
    res.status(200).json(overallStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
