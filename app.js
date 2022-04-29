const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const errorHandler = require('./utils/errorHandler/errorHandler');
require('dotenv').config();

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(helmet());
app.use(express.json());
app.use(logger(formatsLogger));
app.use(cors());

app.use('/api/', require('./routes/api'));

app.use((err, req, res, next) => {
	return errorHandler(err, res);
});

process.on('unhandledRejection', (reason, promise) => {
	console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});

module.exports = app;
