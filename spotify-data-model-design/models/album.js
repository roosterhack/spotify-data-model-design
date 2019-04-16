const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  genres: {
    type: Array
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist"
  },
  song: [
    {
      type: Schema.Types.ObjectId,
      ref: "song"
    }
  ],
  releaseDate: {
    type: Date
  },
  duration: {
    type: Number
  }
});

const Album = mongoose.model("Album", albumSchema);
module.exports = Album;
