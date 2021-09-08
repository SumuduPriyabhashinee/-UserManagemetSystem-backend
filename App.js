const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const Constants = require("./common/constant");
const config = require('./common/environment.json')[process.env.NODE_ENV || 'local'];
const chalk = require('chalk');

const db = require('./config/connection');
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//test db
try {
    db.authenticate();
    console.log(chalk.bgGreen.black('Connection has been established successfully.'));
  } catch (error) {
    console.error(chalk.bgRed.black('Unable to connect to the database:', error));
  }

//image upload
app.use("/images", express.static("images"));

//Routes
var routes = require('./routes/route')(app);

//middleware
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

//Up Sever
var serverDateTime = new Date().toLocaleString('en-US', {
    timeZone: Constants.TIME_ZONE
  });
  
  app.listen(config.PORT, () => {
    console.log(chalk.bgWhite.black('\n====================================================================\n>>>  User Management Sytem API server start on port - ' + config.PORT + '  <<<\n===================================================================='));
    console.log(chalk.bold(chalk.white('> ')+' Date Time :' + serverDateTime+'\n'+chalk.white('> ')+' Access '+chalk.bgYellow.black(' SERVER ')+' - '+chalk.blue.underline('http://localhost:' + config.PORT +'/')));
    console.log(chalk.bgWhite.black('====================================================================\n'));
  });