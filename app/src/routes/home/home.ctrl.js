"use strict";

const { response } = require("../../../app");
const User = require("../../models/User");
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
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
    //프론트 요청된 정보 정의
    /*
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
    // 먼저 인스턴스를 설명하기 위해서는 객체가 무엇인지 알아야하겠죠... 
    // 인스턴스를 쉽게 설명하자면 비슷한 성질(?)을 가진 여러개의 객체를 만들기 위해서 생성자 함수, 
    // Constructor를 만들어 찍어내듯이 사용하는데 이렇게 생성된 객체를 인스턴스라 부를 수 있습니다. 
    // 객체지향언어에서 흔히 사용되는 클래스(Class)가 자바스크립트에서는 프로토타입(prototype)이며 생성자 함수가 사용됩니다. 
    // 다시 말하면 클래스나 프로토타입을 사용하여 만들어 낸 것이 인스턴스라고 볼 수 있습니다
    // 이렇게 만들어진 인스턴스는 어떤 특징을 가지고 있을까요? 
    // 그 이유가 바로 인스턴스를 사용하는 이유겠죠... 
    // 가장 큰 이유는 기본적으로 생성된 인스턴스는 원래의 객체인 클래스나 프로토타입이 가지고 있는 
    // 프로퍼티(property)와 메소드(method)를 모두 상속받기 때문입니다.

    response.success = false;
    response.msg = "로그인에 실패하셨습니다.";
    return res.json(response);
    // console.log(id, psw);
  */
  },
};

module.exports = { output, process };
