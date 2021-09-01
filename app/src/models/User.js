const UserStorage = require("./userStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const { id, psw } = UserStorage.getUsers("id", "psw");
    console.log(id, psw);
  }
}

module.exports = User;
