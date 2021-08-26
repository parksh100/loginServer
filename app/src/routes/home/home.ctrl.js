"use strict";

const { response } = require("../../../app");
const UserStorage = require("../../models/userStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    //프론트 요청된 정보 정의
    const id = req.body.id;
    const psw = req.body.psw;
    const users = UserStorage.getUsers("id", "psw");

    //위의 users 데이터와 프론트에서 요청한 데이터와 같은지 검증.
    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psw[idx] === psw) {
        response.success = true;
        return res.json(response);
        //로그인이 성공하게 되면, success true라는 오브젝트를 제이슨 형태로 변환하여 프론트에 응답을 해주게 되는 것
      }
    }

    response.success = false;
    response.msg = "로그인에 실패하셨습니다.";
    return res.json(response);
    // console.log(id, psw);
  },
};

module.exports = { output, process };
