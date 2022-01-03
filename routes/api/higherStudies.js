const express = require("express");
const router = express.Router();
const User = require("../../models/HigherStudies");


router.post("/form", async(req, res) => {
    const newUser = new User({
        marks12: req.body.marks12,
        cgpa: req.body.cgpa,
        activeKt: req.body.activeKt,
        university: req.body.university,
        location: req.body.location,
        lor: req.body.lor,
        field: req.body.field
      });
      try {
        const data= await newUser.save()
        res.send(data)
    } catch (err) {
        res.status(200).send({
            message:  err.message || "Some error occurred."
        });
    }
  });

  module.exports = router;