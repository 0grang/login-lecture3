"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"), //태그에 id의 값이 psword로 되어있는 것을 불러올때 #~(이것 전체가 선택자)
    loginBtn = document.querySelector("button"); //태그 그대로 이름 불러오기 

    
loginBtn.addEventListener("click",login);

function login(){
  const req = {
    id: id.value,
    psword: psword.value,
  };
  
  fetch("/login", {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if(res.success){
        location.href="/";
      }else{
        alert(res.msg);
      }
    })
    .catch((err)=>{
      //console.error(new Error("로그인 중 에러 발생"));
      console.error("로그인 중 에러 발생");
    });

}



