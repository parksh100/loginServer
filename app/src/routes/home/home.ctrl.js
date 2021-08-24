"use strict";

const users = {
  id: ["parsh", "홍길동", "김팀장"],
  psw: ["1234", "12345", "123456"],
};

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

    //위의 users 데이터와 프론트에서 요청한 데이터와 같은지 검증.
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psw[idx] === psw) {
        return res.json({
          success: true,
          //로그인이 성공하게 되면, success true라는 오브젝트를 제이슨 형태로 변환하여 프론트에 응답을 해주게 되는 것
        });
      }
    }
    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
    // console.log(id, psw);
  },
};

module.exports = { output, process };
