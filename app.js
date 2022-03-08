//express서버를 이용하시지 않고 http서버 띄우기
// const http = require("http");
// const app = http.createServer((req,res)=>{
//   res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});//한글처리
//   if(req.url==="/"){
//     res.end("여기는 루트입니다.");
//   }else if(req.url ==="/login"){
//     res.end("여기는 로그인 화면입니다.");
//   }
// });

// app.listen(3001,() =>{
// console.log("http로 기동된 서버입니다. ");
// });

//express서버로 띄우기
//모듈
const express = require("express")
const app = express();
const PORT = 3000;

//라우팅
const home = require("./routes/home");

//앱 셋팅
app.set("views","./views");
app.set("view engine","ejs") //views엔진을 ejs를 이용하겠다는 뜻

//아래 라우팅하는 것을 모두 가져가서  routes / home/ indexedDB.js로 이동
// app.get("/",(req,res)=>{
//   //루트로 들어오면 아래와 같은 기능을 동작하겠음.
//   res.render("home/index");// 루트로 들어왔을때 이동할 곳
// });//경로 만들기

// app.get("/login",(req,res)=>{
//   res.send("home/login");
// });


//index.js를 메인파일인 app.js에 연결해주는 역할
app.use("/",home);//use -> 미들 웨어를 등록해주는 메서드

//아래부분 모듈화로 따로 빼줌. bin/www.js
// app.listen(PORT, function(){
// console.log("서버가동");
// });

//위의 app.listen 을 모듈화로 만든 파일인 bin/www.js 파일에서 app을 사용하려면 메인파일에서 app을 내보내줘야함.
module.exports = app;