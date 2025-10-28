require("dotenv").config();

module.exports = {
  mongoURI: "mongodb://mongo:27017/auth",
  jwtSecret: process.env.JWT_SECRET 
};
