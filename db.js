// db.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let connectionString = process.env.CONNECTION_STRING || "";

if (!connectionString) {
  throw new Error(
    "No connection string provided. \n\nPlease create a `.env` file in the root of this project. Add a CONNECTION_STRING variable to that file with the connection string to your MongoDB cluster. \nRefer to the README.md file for more information."
  );
}

if (connectionString.indexOf("appName") === -1) {
  connectionString +=
    connectionString.indexOf("?") > -1
      ? "&appName=devrel.template.remix|"
      : "?appName=devrel.template.remix|";
} else {
  connectionString = connectionString.replace(
    /appName\=([a-z0-9]*)/i,
    (m, p) => `appName=devrel.template.remix|${p}`
  );
}

let dbInstance = null;
let client = null;

async function connectToDatabase() {
  if (dbInstance) return dbInstance;

  try {
    client = new MongoClient(connectionString);
    await client.connect();
    dbInstance = client.db("glitch");
    return dbInstance;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

export function getDb() {
  if (!dbInstance) {
    throw new Error("Database not initialized. Please wait for connection.");
  }
  return dbInstance;
}

connectToDatabase().catch(console.error);

export { connectToDatabase };
