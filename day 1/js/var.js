// var.js
//?학생 ?학년 ?반
//document.write()
//변수명 예약어(if, class, for)사용 불가

var sName = "우영우";
var sGrade = 3;
var sClass = 4;

//출력
document.write(sName + " 학생은 " + sGrade + "학년 "
               + sClass + "반<br>");
document.write(sName + "&nbsp; &nbsp", sGrade + " ", sClass + " ");

console.log("이름 : " + sName);
console.log("학년 : " + sGrade);
console.log("반 : " + sClass);

//charset(문자열) 연습
var ch1 = 65;
console.log(ch1);
console.log(StringfromCharCode(ch1));

var ch2 = '0';
console.log(ch2);
console.log(ch2.charCodeAt(0));

//유니코드
let ch3= '가';
//console.log(ch3);
document.write(ch3);