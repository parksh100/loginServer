"use strict";

//모듈
const express = require("express");

const app = express();

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

//라우트 불러오기
const home = require("./routes/home");
app.use("/", home);

module.exports = app;
