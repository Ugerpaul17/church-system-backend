const express = require("express");
const memberController = require("./../controllers/membersController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, memberController.getAllMembers)
  .post(memberController.createMember);

router
  .route("/:id")
  .get(memberController.getMember)
  .patch(memberController.updateMember)
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    memberController.deleteMember
  );

module.exports = router;
