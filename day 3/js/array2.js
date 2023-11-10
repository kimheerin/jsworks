//Array 객체를 사용한 배열
let num = new Array();
console.log(num);

//특정요소 1개 조합
console.log(num[0]);

//전체 요소 검색
for(let i = 0; i<num.length; i++){
   console.log(num[i] + " ");
}

//for in문
console.log("for ~ in문 검색")
for(let i in num){
   console.log(num[i] + " ")
}

//연산
console.log("인덱스로 연산하기")
console.log(num[1] - num[2]);
console.log(num[1] <= num[2]);

//합계 및 평균
let sum = 0;
for(let i = 0; i<num.length; i++){
   //sum = sum+num[i];
   sum+num[i]; //누적 합계
}
avg = sum/num.length;
console.log(sum);
console.log(avg);