const express = require('express');
const memberController = require('./../controllers/membersController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route("/")
  .get(memberController.getAllMemebers)
  .post(memberController.createMember);

router
  .route("/:id")
  .get(authController.protect, memberController.getMember)
  .patch(memberController.updateMember)
  .delete(memberController.deleteMember);


module.exports = router; 