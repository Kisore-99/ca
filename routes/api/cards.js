const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load Card model
const Card = require("../../models/Card");
// Load User model
const User = require("../../models/User");


// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/", (req, res) => {
  // Form validation

  //const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }
  const email= req.body.email;
  const card_num = req.body.card_num;
  const cvv = req.body.cvv;
  const card_holder_name = req.body.card_holder_name;
  const expiry = req.body.expiry;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }else {
        const newCard = new Card({
          email,
          card_num,
          cvv,
          card_holder_name,
          expiry
        });
        newCard
            .save()
            .then(res.json({Succes:'card details are stored'}))
            .catch(err => console.log(err));
    }
  });
});

module.exports = router;
