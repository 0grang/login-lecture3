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
  console.log(req);
}

