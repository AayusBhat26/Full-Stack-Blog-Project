const express = require("express");
const app = express();
const PORT = 3002;
const dotEnv = require("dotenv"); dotEnv.config();
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
// as i tried to the send the json object fromcd postman, this app or server was not able to send the same, in order to fix this error, we would use, express.json() method.
const multer = require('multer'); // in order to upload images.


app.use(express.json());
// const mongoose = require('mongoose');
//Set up default mongoose connection
mongoose.connect(process.env.Mongo_Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(console.log('Connected to mongo')).catch(err=>{
      console.log('Error occured: ' + err.message);
});

// creating space for images for multer
const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, "images");
  },
  filename:(req, file, cb)=>{
    cb(null, req.body.name);
  }
});

const upload  = multer({
  storage:storage
});

app.post('/api/upload', upload.single('file'), (req, res)=>{
  res.status(200).json({
    message:`file has been uploaded successfully.`
  })
})

// authentication route
app.use('/api/auth', authRoute)
// user route
app.use("/api/users", userRoute);

// post route
app.use("/api/posts", postRoute);

// category route
app.use("/api/categories", categoryRoute);


// app.use("/", (req, res) => {
//   console.log("Home page");
// });
app.listen(PORT, (req, res) => {
  console.log(`Server listening on ${PORT}`);
});
