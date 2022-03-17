const express = require("express");
const router = express.Router();
const User = require("../../models/InterestedUser");


router.post("/user", async(req, res) => {
    User.findOne({topic:req.body.topic , prn: req.body.prn , year:req.body.year, branch:req.body.branch }).then(user => {
        if (user) {
                    return res.status(200).json({ message: "already submitted" });
                }else {
                    const newUser = new User({
                        domain: req.body.domain,
                        topic: req.body.topic,
                        prn: req.body.prn,
                        name: req.body.name,
                        branch: req.body.branch,
                        year: req.body.year
                    });
                    try {
                        const data=  newUser.save()
                        res.send({ message: "Submitted" })
                    } catch (err) {
                        res.status(500).send({
                            message: err.message || "Some error occurred."
                    });
                } 
            }
    });
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