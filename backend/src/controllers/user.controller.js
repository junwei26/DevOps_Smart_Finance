const db = require("../models");
const User = db.users;

// Create and save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.user) {
    res.status(400).send({ message: "Username cannot be empty!" });
    return;
  } else if (!req.body.pass) {
    res.status(400).send({ message: "Password cannot be empty!" });
    return;
  }

  // Create a User
  const user = new User({
    user: req.body.user,
    pass: req.body.pass,
    transactions: [],
    accounts: [],
  });

  // Save User in the database
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while creating the User.",
      });
    });
};

// Find a single User with a username
exports.findOne = (req, res) => {
  if (!req.body.user) {
    return res.status(400).send({ message: "Username cannot be empty!" });
  }

  User.findOne({ user: req.body.user })
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .send({ message: "User with username " + req.body.user + " not found." });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving User with username " + req.body.user,
      });
    });
};
