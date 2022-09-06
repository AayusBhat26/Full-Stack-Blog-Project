const router = require("express").Router();
// const bcrypt = require("bcrypt");
const category = require("../models/Users");
// const Post  = require('../models/Posts');
// const Posts = require("../models/Posts");
// const User = require("../models/Users");

router.post('/', async(req, res)=>{
      const newCategory = new category(req.body);
      try {
            const savedCategory = await newCategory.save();
            res.status(200).json(savedCategory);
      } catch (err) {
            res.status(500).json({
                  message: `${err.message}`
            })
      }
})



// fetching all the categories
router.get("/", async (req, res) => {
//   const newCatego ry = new category(req.body);
  try {
//     const savedCategory = await newCategory.save();
      const cate = await category.find(); 
    res.status(200).json(cate);
  } catch (err) {
    res.status(500).json({
      message: `${err.message}`,
    });
  }
});
module.exports = router;