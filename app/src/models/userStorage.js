"use strict";

class UserStorage {
  static #users = {
    id: ["parksh", "홍길동", "김팀장"],
    psw: ["1234", "12345", "123456"],
    name: ["박성훈", "나개발", "김팀장"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        //우선 hasOwnProperty 메소드가 하는 일은 객체가 특정 프로퍼티에 대한 소유 여부를 반환한다.해당 객체에 특정 프로퍼티가 존재하면 true, 그렇지 않으면 false 를 반환한다.
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
