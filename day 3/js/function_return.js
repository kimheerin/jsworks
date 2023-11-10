//return이 있는 함수


//제곱수를 계산하는 함수
//어떤 수를 입력받아 제곱하는 함수

function square(x){
   let num = x * x;
   return num; //변수가 리턴
}

function add(x, y){
   return x + y; // 구문이 리턴
}

let add =function(x,y){
   return x + y;
}
let result= add(10 ,11);
console.log(result)



//함수 사용 -호출
console.log(square(5));
// let result =add(4,5);
console.log(add(4,5));