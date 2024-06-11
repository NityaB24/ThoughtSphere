const mongoose = require ('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

  const userSchema = mongoose.Schema({
    username: String,
    name:String,
    age: Number,
    email: String,
    password: String,
    profilepic:{
      type: String,
      default: "default.jpg"
    },
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }]
  })

  module.exports = mongoose.model('user', userSchema);