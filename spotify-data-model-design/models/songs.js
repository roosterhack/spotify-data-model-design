const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
  name: {
    type: String
  },
  genres: {
    type: Array
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist"
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: "Album"
  },
  releaseDate: {
    type: Date
  },
  duration: {
    type: Number
  },
  rating: {
    type: Number
  }
});

const Song = mongoose.model("Song", songSchema);
module.exports = Song;
