"use strict";

//모듈
const express = require("express");

const app = express();
const PORT = 3000;

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

//라우트 불러오기
const home = require("./routes/home");
app.use("/", home);

//포터 지정
app.listen(PORT, () => {
  console.log("서버가동");
});
