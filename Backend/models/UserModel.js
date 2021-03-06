const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  roles:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "roles"
    } 
  ],
  groups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "groups"
    }
  ],
  rating: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ratings"
    }
  ],
  preferences: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "preferences"
    }
  ],
  colleges: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'colleges'
    }
  ],
  campuses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'campuses'
    }
  ],
  programs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'programs'
    }
  ],
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'courses'
    }
  ],
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'projects'
    }
  ],
});

UserSchema.virtual('roledescription')
              .get(function(){
                return `${this.roles.description} `
              })

const User = mongoose.model("Users", UserSchema);
module.exports = User;