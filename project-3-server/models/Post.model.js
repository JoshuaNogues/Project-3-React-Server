const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    post: String,
    photo: String,
    contributor: {type: Schema.Types.ObjectId, ref: 'User'},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;