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
  //여기까지는 프론트의 요청을 서버 콘솔에 보여주기만 하는 코드
  //여기서 부터는 fetch로 프론트 정보를 서버에 전달하는 코드...
  fetch("/login", {
    method: "POST",
    headers: {
      "content-type": "application/json", //json형태로 보낸다는 것을 알려줌
    },
    body: JSON.stringify(req), //json화 함
  });
}
//이상의 데이터를 서버에서 받을 수 있는 api가 마련되어 있어야 한다.
