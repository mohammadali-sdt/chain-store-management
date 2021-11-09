const AppError = require('../utils/appError');

// HANDLE ERRORS
const handleCastErrorDB = (err) => {
    return new AppError(`Invalid ${err.path}: ${err.value}`, 400);
}
const handleDuplicateFieldDB = (err) => {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    return new AppError(`Duplicate field value: ${value}. Please use another value!`, 400);
}
const handleValidationErrorDB = (err) => {
    const errors = Object.values(err.errors).map(el => el.message);
    const message = `Invalid input data.${errors.join('. ')}`;
    return new AppError(message, 400);
}
const handleJWTError = () =>
  new AppError('Invalid token. Please log in again!', 401);

const handleJWTExpiredError = () =>
  new AppError('Your token has expired! Please log in again.', 401);

// Send Errors with different Environment

const sendErrorDev = (err, req, res) => {
    // 1) API
    if (req.originalUrl.startsWith('/api')) {
        return res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack,
        })
    }

    // 2) Render website
}

const sendErrorProd = (err, req, res) => {
    if (req.originalUrl.startsWith('/api')) { //
        // if app error
        if (err.isOperational) {
            return res.status(err.statusCode).json({
                status: err.status,
                message: err.message,
            });
        }
      // other errors
      return res.status(500).json({
          status: 'error',
          message: 'Something wrong! :('
      })
    }
}

// Central Error Handler
module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'development'){
        sendErrorDev(err, req, res);
    } else if (process.env.NODE_ENV === 'production') {
        let error = {...err};
        error.message = err.message;

        if (error.name === 'CastError') error = handleCastErrorDB(error);
        if (error.code === 11000) error = handleDuplicateFieldDB(error);
        if (error.name === 'ValidationError') error = handleValidationErrorDB(error);
        if (error.name === 'JsonWebTokenError') error = handleJWTError(error);
        if (error.name === 'TokenExpiredError') error = handleJWTExpiredError(error);

        sendErrorProd(error, req, res);
    }
}