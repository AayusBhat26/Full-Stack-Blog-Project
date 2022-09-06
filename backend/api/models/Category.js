const mongoose = require("mongoose");
// timestamps
// titles

// desc
// photo
// username

// categories

const categorySchema = new mongoose.Schema(
  {
   name:{
      type: String, 
      required: true
   }
  },
  { timestamps: true }
);

module.exports = mongoose.model("category", categorySchema);
