const express = require("express");
const branchRouter = require('./routes/branchRoutes');


const app = express();

app.use(express.json({ limit: "10Kb" }));

app.use('/api/v1/branch', branchRouter);

module.exports = app;

