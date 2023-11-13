//2초 간격으로 인사말이 변경되도록
//콜백함수 기능
//배열의 인덱스가 1 증가할 때 인사말이 바뀜
window.onload = function(){   //윈도우 계통의 함수가 존재하면 <script src>ㄹ,ㄹ gead 위로 올림
   let msg = ["오늘도 좋은 하루!", "행운을 빌어요", "하이루"]

   let msgIdx = 0;

   myGreeting();  //함수 호출

   function myGreeting() {
      let msg2 = document.getElementById("demo")
      msg2.innerHTML = msg[msgIdx];
      msg2.style.color = "green";
      msgIdx++;                   //1 증가
      if(msgIdx == msg.length ){  //인덱스 번호 제한
         msgIdx = 0;
      }
      setTimeout(myGreeting, 2000);    //myGreeting() 호출
   }
}