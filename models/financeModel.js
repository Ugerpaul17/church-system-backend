const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
  service: {
    type: String,
    required: [true, "Finance must have a service"],
    enum: ["Sunday Service", "Bible Study", "Revival Service"],
  },
  offering: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Finance = mongoose.model('Finance', financeSchema);

module.exports = Finance;