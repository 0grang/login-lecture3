"use strict";

const express = require("express");
const router = express.Router();

//home.ctrl.js에서 넘겨준 exports한 것을 받아옴.
const ctrl = require("./home.ctrl");

//app.js  미들웨어를 통해 콜백함수로 연결됨.
//router.get("/",ctrl.hello);//경로 만들기
router.get("/",ctrl.output.hello);//경로 만들기
router.get("/login",ctrl.output.login);
router.post("/login",ctrl.process.login);

//내부에서는 동작이 가능하나 app.js(메인파일)에서는 index.js가 어디있는지 모르기에 연결해줘야 함.
module.exports = router;
