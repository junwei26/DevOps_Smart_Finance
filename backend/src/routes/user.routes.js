module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/create", users.create);

  // Login a User
  router.post("/login", users.login);

  // Retrieve a single User with username
  router.get("/", users.findOne);

  // Find and update single User
  router.get("/update", users.findAndUpdate);

  app.use("/api/users", router);
};
