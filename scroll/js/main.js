//main.js
//main.html에 연결

$(document).ready(function(){
   //alert("Hello");
   $(window).scroll(function(){
      console.log($(this).scrollTop());

      if($(this).scrollTop() > 100){
         $("#up").addClass("on");   //on class 생성
      }else{
         $("up").removeClass("on"); //on class 삭제
      }

      //top 메뉴 클릭 시, 스크롤바가 상단으로 이동함
      $("#up a").click(function(){
         $(window).scrollTop(0); //y 좌표를 0으로 설정
      })
   });
})