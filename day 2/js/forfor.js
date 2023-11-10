//forfor.js

for(let i = 1; i <= 5; i++){
   for(let j = 1; j <= 5; j++){
      document.write("$");
   }
document.write("<br>");
}

//구구단
for(let i = 2; i <= 9; i++){
   for(let j = 1; j <= 9; j++){
      document.write(i + " x " + j + " = " + (i*j) + "<br>");
   }
document.write("<br>");
}

//직각 삼각형 모양으로 출력
for(let i = 1; i <= 5; i++){     //행
   for(let j = 1; j <= i; j++){  //열
      document.write("$");
   }
document.write("<br>");
}
//역직각 삼각형 모양으로 출력
for(let i = 1; i <= 5; i++){     //행
   for(let j = 1; j <= 6-i; j++){//열
      document.write("$");
   }
document.write("<br>");
}

//j--로 감소시켜 출력
/* 
for(let i = 1; i <= 5; i++){     //행
   for(let j = 5; j <= i; j--){  //열
      document.write("$");
   }
document.write("<br>");
}
*/

/*
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20
*/
for(let i = 0; i<= 3; i++){
   for(let j = 1; j<=5; j++){
      document.write(5 * i + j + (" "));
   }
   document.write("<br>");
}