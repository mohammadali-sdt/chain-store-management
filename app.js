const express = require("express");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");
const branchRouter = require("./routes/branchRoutes");
const productRouter = require("./routes/productRoutes");
const stockRouter = require("./routes/stockRoutes");
const customerRouter = require("./routes/customerRoutes");
const employeeRouter = require("./routes/employeeRoutes");
const supplyRouter = require("./routes/supplyRoute");
const salesRouter = require("./routes/emprcu_buyRoutes");
const viewsRouter = require("./routes/viewsRoute");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json({ limit: "10Kb" }));
app.use(express.static("public"));

// ROUTES
app.use("/", viewsRouter);
app.use("/api/v1/branch", branchRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/stock", stockRouter);
app.use("/api/v1/customer", customerRouter);
app.use("/api/v1/employee", employeeRouter);
app.use("/api/v1/supply", supplyRouter);
app.use("/api/v1/sale", salesRouter);

// if url is not in our routes, 404 Error. use all() because we want do it for all HTTP methods.
app.all("*", (req, res, next) => {
  return next(
    new AppError(`Cannot find ${req.originalUrl} on this server!`, 404)
  );
});

// Global Error Handling
app.use(globalErrorHandler);

module.exports = app;
