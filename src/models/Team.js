import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Team = sequelize.define(
  "Team",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },

    admin_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    tableName: "teams",
    timestamps: false,
  }
);