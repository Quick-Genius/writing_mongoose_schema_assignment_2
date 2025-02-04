const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true,
      minlength: 1
    },
    commentedAt: {
      type: Date,
      default: Date.now
    }
  });

const BlogPostSchema = new mongoose.Schema({

    title : {
        type : String,
        unique : true,
        required : true,
        min : 0,
    },

    content : {
        type : String,
        required : true,
        minlength : 50,
    },
    author : {
        type : String,
        required : true,
        
    },
    tags : {
        type : [String],

    },
    category : {
        type : String,
        default : "General",
    },
    likes: {
        type: [String] // Array of usernames
      },
      comments: [CommentSchema],
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date
      },
});

BlogPostSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
  });
  
  module.exports = mongoose.model('BlogPost', BlogPostSchema);