module.exports = (app) => {
  const transactions = require("../controllers/transaction.controller.js");

  var router = require("express").Router();

  // Create a new Transaction
  router.post("/", transactions.create);

  // Retrieve a single Transaction with id
  router.get("/:id", transactions.findOne);

  // Retrieve all Transactions
  router.get("/", transactions.findAll);

  app.use("/api/transactions", router);
};
