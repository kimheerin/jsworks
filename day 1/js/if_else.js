//if else.js

//단독 if문
//if else문

//속도를 입력 받아 속도 위반을 판정하는 프로그램 작성
let limit_speed = prompt("속도를 입력하세요.")

/*
if(limit_speed >= 50) {
   document.write("안전 속도 위반! 과태료 10만 원 부과 대상<br>");
}
document.write("시속 " + limit_speed + "km");
*/

if(limit_speed == null){
   document.write("입력이 취소되었습니다.");
}else {
   if(limit_speed >= 50) {
      document.write("안전 속도 위반! 과태료 10만 원 부과 대상<br>");
   }else{ //limit_speed < 50
      document.write("안전 속도 준수<br>");
   }
   document.write("시속 " + limit_speed + "km");
}