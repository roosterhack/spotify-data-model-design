const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favSchema = new Schema({
  artist: [
    {
      type: Schema.Types.ObjectId,
      ref: "Artist"
    }
  ],
  album: [
    {
      type: Schema.Types.ObjectId,
      ref: "Album"
    }
  ],
  song: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song"
    }
  ]
});

const Favourite = mongoose.model("Favourite", favSchema);
module.exports = Favourite;
