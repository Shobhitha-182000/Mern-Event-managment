const mongoose = require("mongoose");
const { type } = require("os");

const imageSchema = new mongoose.Schema(
  {
    image: String,
  },
  { collection: "ImageDetails" }
);

const Image = mongoose.model("ImageDetails", imageSchema);

module.exports = Image;
