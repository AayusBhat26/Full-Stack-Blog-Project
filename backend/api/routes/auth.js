const router = require('express').Router();
const bcrypt = require("bcrypt");
const User = require('../models/Users');


// Registeration 
router.post('/register', async(req, res)=>{
      try{
            // if i do req.body, it will take everythingg from the body.
            // so i need to define my own properties
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password,salt)
            const newUser = new User({
              username: req.body.username,
              email: req.body.email,
              //   password: req.body.password,
              password: hashedPassword,
            });


            // the save method is defined by mongoose
            const user = await newUser.save();


            // once the user has been created, i will set the status as 200 and send the user in the form of json.
             return res.status(200).json({
                  user,
               status: "success"
             });
      }
      catch(err){
            return res.status(500).json({
              status: "error",
              error: "error occurred",
            });
      }
});

// Login
router.post('/login', async(req, res)=>{
      try{
            const user = await User.findOne({
                  username:req.body.username
            })
            {
                  if(!user){
                       return res.status(400).json({
                         status: "error",
                         error: "no user was found",
                       });
                  }
            }
            // console.log(user);

            const authPassword = await bcrypt.compare(req.body.password, user.password); 
            // !authPassword && res.status(400).json("No user found");
            if(!authPassword){
                  return res.status(400).json({
                    status: "error",
                    error: "no user was foundp",
                  });
            }

            // res.status(200).json(user);
            // const {password, ...leftOvers} = user; // here it was sending the entire document and model of the user. in order to prevent this we can access the document. 
            const {password, ...leftOvers} = user._doc; 
            return res.status(200).json(leftOvers);
      }
      catch(err){
            // res.status(500).json(err);
            return res.status(500).json(err);
      }
})

module.exports = router;



// for register => localhost:3002/api/auth/register