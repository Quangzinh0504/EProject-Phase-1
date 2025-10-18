require("dotenv").config();

module.exports = {
  mongoURI: "mongodb://localhost:27017/auth",
  jwtSecret: process.env.JWT_SECRET 
};
