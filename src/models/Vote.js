import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Vote = sequelize.define(
  "Vote",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    type: {
      type: DataTypes.ENUM("TOP", "FLOP"),
      allowNull: false,
    },

    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    voter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "participants",
        key: "id",
      },
    },

    target_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "participants",
        key: "id",
      },
    },

    lobby_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "lobbies",
        key: "id",
      },
    },
  },
  {
    tableName: "votes",
    timestamps: false,
  },
);
