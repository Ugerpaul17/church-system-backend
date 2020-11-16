const Finance = require("./../models/financeModel");
const catchAsync = require("./../utile/catchAsync");
const AppError = require("./../utile/appError");

exports.createFinance = catchAsync(async (req, res, next) => {
  const newFinance = await Finance.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      finance: newFinance,
    },
  });
});

exports.getAllFinance = catchAsync(async (req, res, next) => {
  const finance = await Finance.find();
  res.status(200).json({
    status: "success",
    results: finance.length,
    data: {
      finance,
    },
  });
});

exports.getFinance = catchAsync(async (req, res, next) => {
  const finance = await Finance.findById(req.params.id);

  if (!finance) {
    return next(new AppError("No finance found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      finance,
    },
  });
});

exports.updateFinance = catchAsync(async (req, res, next) => {
  const finance = await Finance.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!finance) {
    return next(new AppError("No finance found with that ID", 404));
  }

  res.status(201).json({
    status: "success",
    data: {
      finance,
    },
  });
});

exports.deleteFinance = catchAsync(async (req, res, next) => {
  const finance = await Finance.findOneAndDelete(req.params.id);

  if (!finance) {
    return next(new AppError("No finance found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
