/** Express app for bookstore. */

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10  requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: "Too many requests from this IP, please try again later",
});

app.use(express.json());
app.use(limiter);

const ExpressError = require("./expressError");
const bookRoutes = require("./routes/books");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/books", bookRoutes);

/** 404 handler */

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});

module.exports = app;
