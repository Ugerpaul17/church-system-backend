const express = require("express");
const attendanceController = require("./../controllers/attendanceController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, attendanceController.getAllAttendances)
  .post(attendanceController.createAttendance);

router
  .route("/:id")
  .get(attendanceController.getAttendance)
  .patch(attendanceController.updateAttendance)
  .delete(attendanceController.deleteAttendance);

module.exports = router;
