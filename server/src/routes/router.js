require("dotenv").config();
const expressJwt = require("express-jwt");
const express = require("express");

// auth
const signUp = require("./auth/signup");
const signIn = require("./auth/signin");
const signOut = require("./auth/signout");
const current = require("./auth/current");
//user
const getUserSettings = require("./userRoutes/userSettings/getUserSettings");
const addDefaultUserSettings = require("./userRoutes/userSettings/addDefaultUserSettings");
const updateUserSettings = require("./userRoutes/userSettings/updateUserSettings");
// router
const apiRoutes = express.Router();

const requireAuth = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "user"
});

apiRoutes
  .post("/auth/signup", signUp)
  .post("/auth/signin", signIn)
  .post("/auth/signout", signOut)
  .get("/auth/current", requireAuth, current)
  .get("/user/userSettings", getUserSettings)
  .post("/user/userSettings", addDefaultUserSettings)
  .put("/user/userSettings/:id", updateUserSettings);

module.exports = apiRoutes;
