const express = require("express");
const router = express.Router();
const User = require("../../models/Placement");


router.post("/form", async(req, res) => {
    const newUser = new User({
        company: req.body.company,
        companydescription: req.body.companydescription,
        location: req.body.location,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        jobdescription: req.body.jobdescription,
        cgpa: req.body.cgpa,
        branch: req.body.branch,
        link: req.body.link,
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

router.get("/view", async(req,res)=>{
    try {
        const data=await User.find()
        res.send(data)
        console.log(req.body);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
            });
    }
})

  module.exports = router;