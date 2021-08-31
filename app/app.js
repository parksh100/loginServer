'use strict';

//모듈
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
//urlㅇ르 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제해결
//bodyparser에 줄이 그여지면 express로 변경할 것
app.use(express.urlencoded({ extended: true }));

//라우트 불러오기
const home = require('./src/routes/home');
app.use('/', home);

module.exports = app;

//test중임
