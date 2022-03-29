"use strict";




const output ={
//function hello(req,res){} 와 같음.
  hello: (req,res)=>{
    
    //루트로 들어오면 아래와 같은 기능을 동작하겠음.
    
    res.render("home/index");// 루트로 들어왔을때 이동할 곳
  },

  login: (req,res)=>{
    res.render("home/login");
  },
};

const users = {
  id: ["grang","그랑","땡그랑"],
  psword: ["1234","1234","123456"],
};

const process = {
  login: (req,res) => {
    const id = req.body.id,
    psword = req.body.psword;

    if(users.id.includes(id)){
      const idx = users.id.indexOf(id);
      if(users.psword[idx]===psword){
        return res.json({
          success:true,
        });
      }
    }

    return res.json({
      success:false,
      msg:"로그인에 실패하셨습니다.",      
    });
  },
};


//index.js에서 사용할 수 있도록 밖으로 빼줌
module.exports = {
  // hello,//const로 설정된hello 내보내주기
  // login,
  output,
  process,
};
//hello만 해도 key:value가 동일하게 hello로 설정된거와 같음 
