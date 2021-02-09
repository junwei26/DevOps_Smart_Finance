const db = require("../models");
const User = db.users;

// Create a new Account for specified User
exports.create = (req, res) => {
  if (!req.body.user) {
    return res.status(400).send({ message: "Username cannot be empty!" });
  }
  if (!req.body.name) {
    return res.status(400).send({ message: "Name cannot be empty!" });
  }
  if (req.body.type === undefined) {
    return res.status(400).send({ message: "Type cannot be empty!" });
  }
  if (req.body.amount === undefined) {
    return res.status(400).send({ message: "Amount cannot be empty!" });
  }
  if (req.body.budget === undefined) {
    return res.status(400).send({ message: "Budget cannot be empty!" });
  }

  const newAccount = {
    type: req.body.type,
    name: req.body.name,
    amount: req.body.amount,
    budget: req.body.budget,
  };

  User.findOne({ user: req.body.user }, (err, doc) => {
    if (err || !doc) {
      return res
        .status(404)
        .send({ message: "User with username " + req.body.user + " not found." });
    }
    doc.accounts.push(newAccount);
    doc.save((err) => {
      if (err) {
        return res.status(500).send({
          message: err.message || "Error updating Accounts for User with username " + req.body.user,
        });
      }
      return res.send("Successfully added new Account.");
    });
  });
};

// Fetch all Accounts of specified User
exports.getAll = (req, res) => {
  if (!req.query.user) {
    return res.status(400).send({ message: "Username cannot be empty!" });
  }

  User.findOne({ user: req.query.user })
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .send({ message: "User with username " + req.query.user + " not found." });
      }
      res.send(data.accounts);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Accounts for User with username " + req.query.user,
      });
    });
};
