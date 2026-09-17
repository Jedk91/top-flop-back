import { sequelize } from "../config/database.js";

const { Sequelize, DataTypes } = require("sequelize");

export const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
