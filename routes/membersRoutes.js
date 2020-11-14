const express = require('express');
const memberController = require('./../controllers/membersController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route("/")
  .get(memberController.getAllMembers)
  .post(memberController.createMember);

router
  .route("/:id")
  .get(authController.protect, memberController.getMember)
  .patch(authController.protect, memberController.updateMember)
  .delete(authController.protect, memberController.deleteMember);


module.exports = router; 