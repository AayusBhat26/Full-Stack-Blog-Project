const router = require("express").Router();
const bcrypt = require("bcrypt");
const Users = require("../models/Users");
// const Post  = require('../models/Posts');
const Posts = require("../models/Posts");
// const User = require("../models/Users");

// updating, here id => userid
router.put("/:id", async (req, res) => {
  // const paramsId = req.params.id
  if (req.body.userId == req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await Users.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json({
        updatedUser,
        message: "User has been updated",
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    // console.log(req.body.id, req.body.userId, req.params.id); // out of scope hai isliue notdefined.
    return res.status(401).json({
      message: "Invalid user, You can only update your account.",
    });
  }
});



// delete

router.delete("/:id", async (req, res) => {
  // const paramsId = req.params.id
  if (req.body.userId == req.params.id) {
    // deleting the posts by that user who has to be deleted.
    try {
      const user  = await Users.findById(req.params.id);
      // if(user){
         res.status(200).json(user)
      
      try {
        await Posts.deleteMany({username:user.username})
        await Users.findByIdAndDelete(req.params.id);
        return res.status(200).json({
          // updatedUser,
          message: "User has been deleted",
        });
      } catch (err) {
        return res.status(500).json(err);
      }
    } catch (err) {
        return res.status(500).json(err);
      
    }


    // this will delete the user not the posts done by them
   
  } else {
    // console.log(req.body.id, req.body.userId, req.params.id); // out of scope hai isliue notdefined.
    return res.status(401).json({
      message: "Invalid user, You can only delete your account.",
    });
  }
});
// Login
router.post("/login", async (req, res) => {
  try {
  } catch (err) {}
});


// get a single user

router.get('/:id', async (req, res) => {
  try{
    const user = await Users.findById(req.params.id);
    const { password, ...leftOvers } = user._doc;
    res.status(200).json({
      leftOvers,
      message: "User found",
    });
  }catch(err){
    res.status(500).json({
      message:`error occurred ${err.message}`
    })
  }
});

module.exports = router;
