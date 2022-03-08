"use strict";

//function hello(req,res){} 와 같음.
const hello = (req,res)=>{
  //루트로 들어오면 아래와 같은 기능을 동작하겠음.
  res.render("home/index");// 루트로 들어왔을때 이동할 곳
};

const login = (req,res)=>{
  res.render("home/login");
};

//index.js에서 사용할 수 있도록 밖으로 빼줌
module.exports = {
  hello,//const로 설정된hello 내보내주기
  login,
};
//hello만 해도 key:value가 동일하게 hello로 설정된거와 같음 
