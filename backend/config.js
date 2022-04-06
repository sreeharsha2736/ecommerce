import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "mongodb+srv://sreeharsha:mongodb@cluster0.aiglg.mongodb.net/test",
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
};
