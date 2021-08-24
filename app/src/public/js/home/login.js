"use srict";

const id = document.querySelector("#id"),
  psw = document.querySelector("#psw"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psw: psw.value,
  };
  console.log(req);
}
