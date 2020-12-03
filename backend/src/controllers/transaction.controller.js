const db = require("../models");
const Transaction = db.transactions;

// Create and Save a new Transaction
exports.create = (req, res) => {
  // Validate request
  if (!req.body.amount) {
    res.status(400).send({ message: "Amount can not be empty!" });
    return;
  } else if (!req.body.type) {
    res.status(400).send({ message: "Type can not be empty!" });
    return;
  } else if (!req.body.date) {
    res.status(400).send({ message: "Date can not be empty!" });
    return;
  }

  // Create a Transaction
  const transaction = new Transaction({
    amount: req.body.amount,
    type: req.body.type,
    date: req.body.date,
  });

  // Save Transaction in the database
  transaction
    .save(transaction)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while creating the Transaction.",
      });
    });
};

// Find a single Transaction with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Transaction.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Transaction with id " + id + " not found." });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Transaction with id " + id });
    });
};

// Retrieve all Transactions from the database.
exports.findAll = (req, res) => {
  Transaction.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving transactions.",
      });
    });
};
