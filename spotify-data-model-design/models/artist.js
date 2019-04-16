const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  profileImg: {
    type: String
  },
  genres: {
    type: Array
  },
  bio: {
    type: String
  },
  social: {
    type: Array
  },
  follower: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  album: [
    {
      type: Schema.Types.ObjectId,
      ref: "Album"
    }
  ]
});

const Artist = mongoose.model("Artist", artistSchema);
module.exports = Artist;
