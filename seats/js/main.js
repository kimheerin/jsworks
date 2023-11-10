// main.js
// 입장객 수에 따른 행과 열
let customer, colNum, rowNum;

customer = 21;
colNum = 5;

//나머지 유무에 따른 조건문
if(customer % colNum == 0){
   rowNum = customer / colNum;  //열
}else{
   rowNum = parseInt(customer / colNum) + 1;
}

//좌석 번호 배치
document.write("<table>");
for(let i = 0; i < rowNum; i++){
   document.write("<tr>");
   for(let j = 1; j <= colNum; j++){
      let seatNum = colNum * i + j + " ";
      //좌석번호가 입장객보다 크면 빠져나옴
      if(seatNum > customer)
         break;
      document.write("<td>좌석" + seatNum + "</td>");
   }
   document.write("</tr>");
}
document.write("</table>");