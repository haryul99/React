let now = new Date() // 아무 인자값을 주지 않으면 현재 시간
console.log(now);

let time = new Date(2022, 2, 25, 1, 34) //년 월(-1) 일 시간, 분
console.log(time);

console.log("년도 :", now.getFullYear());
console.log("월 :", now.getMonth()+1); //월은 0부터 시작이라 1을 더해줘야함
console.log("일 :",now.getDate());
console.log("요일 :",now.getDay()); // 0~6 일~토