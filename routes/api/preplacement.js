const express = require("express");
const router = express.Router();
const User = require("../../models/PrePlacement");


router.post("/form", async(req, res) => {
    const newUser = new User({
        sname: req.body.sname,
        speaker: req.body.speaker,
        platform: req.body.platform,
        date: req.body.date,
        duration: req.body.duration,
        link: req.body.link,
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