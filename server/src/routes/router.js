require("dotenv").config();
const expressJwt = require("express-jwt");
const express = require("express");

// auth
const signUp = require("./auth/signup");
const signIn = require("./auth/signin");
const signOut = require("./auth/signout");
const current = require("./auth/current");
// user
// settings
const getUserSettings = require("./user/userSettings/getUserSettings");
const addDefaultUserSettings = require("./user/userSettings/addDefaultUserSettings");
const updateUserSettings = require("./user/userSettings/updateUserSettings");
// rating
const getUserRating = require("./user/userRatings/getUserRatings");
const addUserRating = require("./user/userRatings/addUserRating");
const updateUserRating = require("./user/userRatings/updateUserRating");
// comments
const getUserComments = require("./user/userComments/getUserComments");
const addUserComment = require("./user/userComments/addUserComment");
//
// articles
const getArticles = require("./article/getArticles");
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
  .put("/user/userSettings/:id", updateUserSettings)
  .get("/user/userRatings", getUserRating)
  .post("/user/userRatings", addUserRating)
  .put("/user/userRatings/:id", updateUserRating)
  .get("/user/userComments", getUserComments)
  .post("/user/userComments", addUserComment)
  .get("/articles", getArticles);

module.exports = apiRoutes;
