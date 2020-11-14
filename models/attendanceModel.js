const mongoose = require('mongoose');


const attendanceSchema = new mongoose.Schema({
  service: {
    type: String,
    required: [true, "Attendance must have a service"],
    enum: ['Sunday Service', 'Bible Study', 'Revival Service'],
  },
  attendance: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;