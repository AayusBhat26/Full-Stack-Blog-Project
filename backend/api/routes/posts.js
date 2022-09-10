const router = require("express").Router();
// const bcrypt = require("bcrypt");
const Users = require("../models/Users");
// const Post  = require('../models/Posts');
const Posts = require("../models/Posts");
// const User = require("../models/Users");

const url = require('url');




const queryString = require('querystring');

// const params 

// create a new post
router.post("/", async (req, res) => {
  const newPost = new Posts(req.body);
  try {
    const savedSinglePost = await newPost.save();
    res.status(200).json(savedSinglePost);
  } catch (err) {
    return res.status(500).json({
      status: "Failed",
      message: `${err.message}`,
    });
  }
});

// update post

router.put("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Posts.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );

        res.status(200).json(updatedPost);
      } catch (error) {
        return res.status(500).json({
          message: `${err.message}`,
        });
      }
    } else {
      return res.status(401).json({
        message: `You can update only your post.`,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: `${err.message}`,
    });
  }
});
// delete a post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
            await post.delete();

       return res.status(200).json({
            message:"Post Has Been deleted."
       });
      } catch (error) {
        return res.status(500).json({
          message: `${err.message}`,
        });
      }
    } else {
      return res.status(401).json({
        message: `You can only delete  your post.`,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: `${err.message}`,
    });
  }
});



// get a single user

router.get("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
//     const { password, ...leftOvers } = Posts._doc;
    res.status(200).json({
      post,
      message: "Post found",
    });
  } catch (err) {
    res.status(500).json({
      message: `error occurred ${err.message}`,
    });
  }
});





// getting all the posts
router.get("/", async (req, res) => {
  // const urlParams = new URLSearchParams(location.search);
      const username = req.query.name;
      const categoryName = req.query.cate;
      // console.log("username: ",typeof(username))
      // console.log(req.query.username);
      console.log("hi, ", req.query.name);

  try {
      let postsArray;
      if (username) {
      //   postsArray = await Posts.find({ username:username });
        postsArray = await Posts.find({ username });
      }
       else{
            // if there are no username or categoryName just return all the posts.
            postsArray = await Posts.find();
      }
      res.status(200).json(
            postsArray 
      )
  } 
      // }else if(categoryName){
      //       postsArray = await Posts.find({ categories:{
      //             $in:[categoryName]
      //       } });
      
     catch (err) {
    res.status(500).json({
      message: `error occurred ${err.message}`,
    });
  }
});



module.exports = router;
