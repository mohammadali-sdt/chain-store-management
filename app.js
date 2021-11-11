const express = require("express");
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const branchRouter = require('./routes/branchRoutes');
const productRouter = require('./routes/productRoutes');


const app = express();

app.use(express.json({ limit: "10Kb" }));

// ROUTES
app.use('/api/v1/branch', branchRouter);
app.use('/api/v1/product', productRouter);



// if url is not in our routes, 404 Error. use all() because we want do it for all HTTP methods.
app.all('*', (req, res, next)=> {
    return next(new AppError(`Cannot find ${req.originalUrl} on this server!`, 404));
})


// Global Error Handling
app.use(globalErrorHandler);

module.exports = app;

