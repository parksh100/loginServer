"use strict";

const express = require("express");
const { login, home } = require("./home.ctrl");
const router = express.Router();

router.get("/", home);

router.get("/login", login);

module.exports = router;
