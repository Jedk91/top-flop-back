import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Salon = sequelize.define(
  "Salon",
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

    status: {
      type: DataTypes.ENUM("OPEN", "VOTING", "CLOSED"),
      allowNull: false,
    },

    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "teams",
        key: "id",
      },
    },

    creator_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    tableName: "salons",
    timestamps: false,
  }
);