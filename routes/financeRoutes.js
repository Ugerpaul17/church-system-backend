const express = require("express");
const financeController = require("./../controllers/financeController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, financeController.getAllFinance)
  .post(financeController.createFinance);

router
  .route("/:id")
  .get(financeController.getFinance)
  .patch(financeController.updateFinance)
  .delete(financeController.deleteFinance);

module.exports = router;
