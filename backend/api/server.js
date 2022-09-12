const express = require("express");
const path = require('path')
const app = express();
// const cors = require("cors");
const PORT = 5000;
const dotEnv = require("dotenv"); dotEnv.config();
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
// as i tried to the send the json object fromcd postman, this app or server was not able to send the same, in order to fix this error, we would use, express.json() method.
const multer = require('multer'); // in order to upload images.



// app.use(cors);
app.use(express.json());
// making the images folder public. 
app.use('/images', express.static(path.join(__dirname, '/images')))
// const mongoose = require('mongoose');
//Set up default mongoose connection
mongoose
  .connect(
    "mongodb+srv://MainAayushBhat:Aayushbhat2606@cluster-blog-app.vgfbphb.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
    }
  )
  .then(console.log("Connected to mongo"))
  .catch((err) => {
    console.log("Error occured: " + err.message);
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
