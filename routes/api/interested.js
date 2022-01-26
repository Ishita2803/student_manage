const express = require("express");
const router = express.Router();
const User = require("../../models/InterestedUser");


router.post("/higher", async(req, res) => {
    User.findOne({topic:req.body.topic , prn: req.body.prn  }).then(user => {
        if (user) {
                    return res.status(200).json({ message: "already exists" });
                }else {
                    const newUser = new User({
                        topic: req.body.topic,
                        prn: req.body.prn,
                        name: req.body.name
                    });
                    try {
                        const data=  newUser.save()
                        res.send(data)
                    } catch (err) {
                        res.status(500).send({
                            message: err.message || "Some error occurred."
                    });
                } 
            }
    });
});

// router.get("/view", async(req,res)=>{
//     try {
//         const data=await User.find()
//         res.send(data)
//         console.log(req.body);
//     } catch (err) {
//         res.status(500).send({
//             message: err.message || "Some error occurred while retrieving users."
//             });
//     }
// })

module.exports = router;