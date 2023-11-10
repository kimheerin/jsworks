// 함수 정의 
//매개 변수(입력)가 없는 함수
function sayHEllo(){
   document.write("HI I'm EunHo<br>")
}

//매개 변수(입력)가 있는 함수(매개변수에 자료형이 생략됨)
function sayHEllo2(name){
   document.write("안녕하세요~"+name+"님 환영합니다.<br>")
}

//구구단 출력하는 함수 정의
function gugudan(dan) {
   for(var i =1; 1 <=9; i++){
      document.write(dan + "x" + i + "=" + (dan*i) + "<br>")

   }
}

//use function - 호출
sayHEllo();
sayHEllo2("은호");

gugudan(4);