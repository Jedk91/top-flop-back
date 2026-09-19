import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const TeamMember = sequelize.define(
  "TeamMember",
  {
    team_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "teams",
        key: "id",
      },
    },

    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "users",
        key: "id",
      },
    },

    role: {
      type: DataTypes.ENUM("admin", "participant"),
      allowNull: false,
    },

    date_joined: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "team_members",
    timestamps: false,
  }
);