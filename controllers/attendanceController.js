const Attendance = require("../models/attendanceModel");
const catchAsync = require("./../utile/catchAsync");
const AppError = require("./../utile/appError");

exports.getAllAttendances = catchAsync(async (req, res, next) => {
  const attendance = await Attendance.find();
  res.status(200).json({
    status: "success",
    results: attendance.length,
    data: {
      attendance,
    },
  });
});

exports.getAttendance = catchAsync(async (req, res, next) => {
  const attendance = await Attendance.findById(req.params.id);

  if (!attendance) {
    return next(new AppError("No attendance found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      attendance,
    },
  });
});

exports.updateAttendance = catchAsync(async (req, res, next) => {
  const attendance = await Attendance.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!attendance) {
    return next(new AppError("No attendance found with that ID", 404));
  }

  res.status(201).json({
    status: "success",
    data: {
      attendance,
    },
  });
});

exports.createAttendance = catchAsync(async (req, res, next) => {
  const newAttendance = await Attendance.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      attendance: newAttendance,
    },
  });
});

exports.deleteAttendance = catchAsync(async (req, res, next) => {
  const attendance = await Attendance.findOneAndDelete(req.params.id);

  if (!attendance) {
    return next(new AppError("No attendance found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
