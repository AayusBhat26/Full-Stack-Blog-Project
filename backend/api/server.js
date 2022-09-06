const express = require("express");
const app = express();
const PORT = 3002;
const dotEnv = require("dotenv"); dotEnv.config();
const mongoose = require("mongoose");

const authRoute = require('./routes/auth');
const userRoute = require("./routes/users");

// as i tried to the send the json object from postman, this app or server was not able to send the same, in order to fix this error, we would use, express.json() method.

app.use(express.json());
// const mongoose = require('mongoose');
//Set up default mongoose connection
mongoose.connect(process.env.Mongo_Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(console.log('Connected to mongo')).catch(err=>{
      console.log('Error occured: ' + err.message);
});
// authentication route
app.use('/api/auth', authRoute)
// user route
app.use("/api/users", userRoute);



app.use("/", (req, res) => {
  console.log("Home page");
});
app.listen(PORT, (req, res) => {
  console.log(`Server listening on ${PORT}`);
});