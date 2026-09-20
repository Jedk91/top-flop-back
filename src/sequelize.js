import { sequelize } from "./config/database.js"
import { Tables } from "./models/index.js";

async function initDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.")
    await sequelize.sync()
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

initDatabase()