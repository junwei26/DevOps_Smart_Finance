const db = require("../models");
const User = db.users;
const bcrypt = require("bcrypt");

const saltRounds = 10;

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

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.pass, salt, (err, hash) => {
      // Create a User
      const user = new User({
        user: req.body.user,
        pass: hash,
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
    });
  });
};

// Find single user and update
exports.findAndUpdate = (req, res) => {
  if (!req.body.user) {
    return res.status(400).send({ message: "Username cannot be empty!" });
  }
  if (!req.body.pass) {
    return res.status(400).send({ message: "Password cannot be empty!" });
  }
  const currentUsername = req.body.currentUser;
  const filter = { user: currentUsername };
  bcrypt.hash(req.body.pass, saltRounds, (err, hash) => {
    // Create a User
    const updateDoc = new User({
      user: req.body.user,
      pass: hash,
    });

    User.findOneAndUpdate(filter, updateDoc)
      .then((data) => {
        if (!data) {
          res.status(500).send({ message: "Update unsuccessful!" });
        } else {
          res.status(200).send(data);
        }
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Error retrieving User with username " + req.body.user,
        });
      });
  });
};

// Find a single User with a username
exports.findOne = (req, res) => {
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
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving User with username " + req.query.user,
      });
    });
};

// Check if existing user and password exists
exports.login = (req, res) => {
  if (!req.body.user) {
    console.log(req.body.user);
    res.status(400).send({ message: "Username cannot be empty!" });
    return;
  }

  let user = User.findOne({ user: req.body.user })
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .send({ message: "User with username " + req.body.user + " not found." });
      }
      bcrypt.compare(req.body.pass, data.pass, (err, result) => {
        if (result) {
          return res.status(200).json({
            status: "Success",
            message: "Correct Details",
            data: user,
          });
        } else {
          return res.status(404).send({
            message: err || "Error loggin in user " + req.body.user + ". Passwords mismatch.",
          });
        }
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving User with username " + req.body.user,
      });
    });
};
