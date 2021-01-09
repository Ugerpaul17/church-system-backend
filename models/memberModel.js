const mongoose = require("mongoose");
const validator = require("validator");

const memberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "A member must have a First Name"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "A member must have a Last Name"],
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phoneNumber: Number,
  department: String,
  program: String,
  yearEnrolled: {
    type: Date,
    trim: true,
  },
  yearGraduated: {
    type: Date,
    trim: true,
  },
  country: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
