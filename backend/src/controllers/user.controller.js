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

// Find single user and update
exports.findAndUpdate = (req, res) => {
  // Todo: Use a variable username. For now, stick with constant
  currentUsername = "hi0";
  const filter = { user: currentUsername };
  const options = {
    new : false, 
    upsert: true 
  };
  const updateDoc = {
    user: req.query.user,
    pass: req.query.pass,
  };
  if(!req.query.user) {
    return res.status(400).send({ message: "Username cannot be empty!" });
  }
  if (!req.query.pass) {
    return res.status(400).send({ message: "Password cannot be empty!" });
  }
  User.findOneAndUpdate(filter, updateDoc, options).then((data) => {
    if (!data) {
      res.status(400).send({ message: "Update unsuccessful!"});
    } else {
      //Todo : delete orignal username
      res.send(data);
    }
  })
  .catch((err) => {
    res.status(500).send({ message: err.message || "Error retrieving User with username " + req.query.user });
  });
}

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
