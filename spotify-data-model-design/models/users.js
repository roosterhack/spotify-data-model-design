const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profileImg: {
    type: String
  },
  favourite: {
    type: Schema.Types.ObjectId,
    ref: "Favourite"
  },
  playList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Playlist"
    }
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: "Artist"
    }
  ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
