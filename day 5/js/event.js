
window.onload = function(){
   let img = document.querySelector(".pic");



   //커서를 갖다 댔을 때와 벗어났을 때 이미지 변경
   //이벤트 속성에서 'on'을 제외함
   /*
   img.addEventListener("mouseover", function(){
      img.src = "images/easys-2.jpg"
   })
   img.addEventListener("mouseout", function(){
      img.src = "images/easys-1.jpg"
   })
   */

   //객체의 이벤트 속성 사용
   img.onmouseover = function() {
      img.src = "images/easys-2.jpg"
   }
   img.onmouseout = function() {
      img.src = "images/easys-1.jpg"
   }
}
