const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const User = require("../../models/User");


// Register user
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(200).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(200).json({ email: "Email already exists" });
      } else {
        let newUser1;
        const newUser = new User({
          name: req.body.name,
          prn: req.body.prn,
          email: req.body.email,
          password: req.body.password,
          branch: req.body.branch,
          year: req.body.year,
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user=> res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

// Login user and return JWT token
router.post("/login", (req, res) => {
  // Form validation
const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(200).json(errors);
  }
const email = req.body.email;
  const password = req.body.password;
// Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(200).json({ emailnotfound: "Email not found" });
    }
// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              id :user.id
            });
          }
        );
      } else {
        return res
          .status(200)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.put('/placement/:id',async(req,res)=>{
  try {
      const user = await User.findById(req.params.id)
      user.placement = req.body.placement
      const data = await user.save()
      res.json(data)
  } catch (error) {
      res.send(error)
  }
})
router.put('/preplacement/:id',async(req,res)=>{
  try {
      const user = await User.findById(req.params.id)
      user.preplacement = req.body.preplacement
      const data = await user.save()
      res.json(data)
  } catch (error) {
      res.send(error)
  }
})
router.put('/higherstudies/:id',async(req,res)=>{
  try {
      const user = await User.findById(req.params.id)
      user.higherstudies = req.body.higherstudies
      const data = await user.save()
      res.json(data)
  } catch (error) {
      res.send(error)
  }
})
router.put('/marks/:id/:obj',async(req,res)=>{
  try {
      const user = await User.findById(req.params.id)
      user.marks[req.params.obj] = req.body.marks
      const data = await user.save()
      res.json(data)
  } catch (error) {
      res.send(error)
  }
})

router.get('/register/:id',async(req,res)=>{
  try {
    const data = await User.findById(req.params.id)
    if(!data) {
        return res.status(404).send({
            message: "User not found with id " + req.params.id
        });   };
    res.send(data)
} catch (error) {
    res.status(500).send({
        message: "Error retrieving user with id " + req.params.id
    });
}
})


module.exports = router;