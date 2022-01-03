const express = require("express");
const router = express.Router();
const User = require("../../models/Placement");


router.post("/form", async(req, res) => {
    const newUser = new User({
        marks12: req.body.marks12,
        cgpa: req.body.cgpa,
        activeKt: req.body.activeKt,
        company: req.body.company,
        location: req.body.location,
        branch: req.body.branch,
      });
      try {
        const data= await newUser.save()
        res.send(data)
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    }
  });

  module.exports = router;