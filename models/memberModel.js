const mongoose = require('mongoose');

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
  departmemt: String,
  program: String,
  yearEnrolled: Number,
  yearGraduated: Number,
  phoneNumber: Number,
 country: String,
 createdAt: {
 type: Date,
 default: Date.now()
},
});
const Member = mongoose.model('Member', memberSchema);

module.exports = Member;