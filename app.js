const express = require("express");

const app = express();

app.listen(3000, (req, res) => {
  console.log("서버가동");
});
