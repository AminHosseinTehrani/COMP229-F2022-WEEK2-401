//third party modules

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

//
// ES Modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url))

//Import Routees
import indexRouter from './app/routes/index.route.server.js'


//configuration module
import {Secret} from './config/config.js';




//Instantiate Express Application
const app = express();


//Set up Middlewares
app.set('views',path.join(__dirname, '/app/views'))
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname,'/client')));
app.use(express.static(path.join(__dirname,'/public')));
app.use(session({
secret: Secret ,
saveUninitialized: false,
resave:false


}));

// app.use('/')
app.use('/', indexRouter);

app.listen(3000);