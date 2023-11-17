
function addP(){
   //p 태그 생성
   let newP = document.createElement("p");
   let newText = document.createTextNode("숨겨진 텍스트");
   newP.appendChild(newText);    //p 태그 내용 추가

   //div 태그에 p 태그 추가
   let div = document.getElementById("info")
   div.appendChild(newP);
}
