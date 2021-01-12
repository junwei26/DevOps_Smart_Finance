module.exports = (app) => {
  const accounts = require("../controllers/account.controller.js");

  var router = require("express").Router();

  // Create a new Account for a User
  router.post("/", accounts.create);

  // Fetch all Accounts of a User
  router.get("/", accounts.getAll);

  app.use("/api/accounts", router);
};
