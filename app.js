const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const AppError = require("./utile/appError");
const globalErrorHandler = require("./controllers/errorController");
const memberRouter = require("./routes/membersRoutes");
const userRouter = require("./routes/userRoutes");
const attendanceRouter = require("./routes/attendanceRoutes");
const financeRouter = require("./routes/financeRoutes");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
  },
  apis: [
    "./routes/membersRoutes.js",
    "./routes/attendanceRoutes.js",
    "./routes/financeRoutes.js",
    "./routes/userRoutes.js",
  ],
};

const specs = swaggerJsdoc(options);

const app = express();

//middleware
app.use(helmet());

app.use(bodyParser.json());

//Data sanitization against NoSQL query injection
app.use(mongoSanitize());

//Data sanitization against XSS
app.use(xss());

//prevent parameter pollution
app.use(hpp());

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

// ROUTES
app.use("/api/v1/members", memberRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/attendances", attendanceRouter);
app.use("/api/v1/finance", financeRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on the server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
