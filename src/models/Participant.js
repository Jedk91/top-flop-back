import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Participant = sequelize.define(
  "Participant",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    salon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "salons",
        key: "id",
      },
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    tableName: "participants",
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["salon_id", "user_id"],
      },
    ],
  }
);