//배열생성..1
const a1 = new Array(10); //10개 빈배열 생성
const a2 = new Array();
const a3 = new Array(2022, "JavaScript", true);

console.log(a1, a1.length);
console.log(a2, a2.length);
console.log(a3, a3.length);

//배열생성...2
//리터럴
const a4 = [];
const colors = ["red","green","blue","yellow"];
console.log(a4, a4.length)
console.log(colors, colors.length);

//타입의 확인
console.log(typeof a1, typeof a4); //void
console.log(Array.isArray(a1), Array.isArray(a4)); //추천하는 방법

// 객체도 배열처럼 접근할 수 있다.
const person = {
    name : "홍길동",
    job:"개발자"
};

console.log(person.name, person['name']);

// 자바스크립트의 배열을 인덱스의 범위를 엄격하게 체크하지 않는다.
const arr = [];
console.log(arr, arr.length);

//인덱스 번호 초과 접근
arr[10]  = "OverFlow" //없는 접근
console.log(arr, arr.length);

console.log("======배열의 주요 메서드=======")
//concat : 배열 합치기
const veges = ["배추", "무", "쪽파"];
const sources= ["소금", "고춧가루", "새우젓"];
console.log(veges, sources);

const ingr = veges.concat(sources);
console.log(ingr);

//join 특정 문자열을 기준으로 합친다(문자열)

console.log(ingr.join(","))

//push, pop -> stack 처럼 사용가능
let fruits = ["bannana", "apple","mango","orange"];
console.log("STACK:", fruits);

//push는 배열의 맨뒤에 요소를 추가한다.
fruits.push("kiwi");
console.log("STACK :",fruits );

console.log("POP :", fruits.pop());
console.log("STACK:", fruits);

// push, shift  -> Queue 처럼 사용이 가능
//shift 는 출력 방법이 반대
fruits = ["bannana", "apple","mango","orange"];
console.log("QUEUE:" ,fruits);

console.log("SHIFT: ", fruits.shift());//맨 앞에서 데이터를 인출 : pop과 출력 방향이 반대
console.log("QUEUE :", fruits);
console.log("SHIFT: ", fruits.shift());
console.log("SHIFT: ", fruits.shift());
console.log("QUEUE :", fruits);

//splice
fruits =["banana", "orange","apple","grape"];
console.log("원본 : ", fruits);
console.log("SPLICE :", fruits.splice(2));//인수 1개 시작인덱스
console.log("원본 : ", fruits);

fruits =["banana", "orange","apple","grape"];
console.log("원본 : ", fruits);
console.log("SPLICE :", fruits.splice(2, 1)); //인수가 2개 시작인덱스, 갯수
console.log("원본 : ", fruits);

fruits =["banana", "orange","apple","grape"];
console.log("원본 : ", fruits);
console.log("SPLICE :", fruits.splice(2, 1,"kiwi","watermelon")); //인수가 2개 시작인덱스, 갯수, 삽입할 요소 목록
console.log("원본 : ", fruits)

//reverse : 순서 뒤집기
fruits.reverse();
console.log("REVERSE :", fruits);

// sort : 정렬(기본: 오름차순 정렬)
fruits.sort();
console.log("SORT :", fruits);

//정렬 키 함수를 정의하면 원하는 기준대로 정렬을 할 수 있다.
fruits.sort(function(v1, v2) {
    // 정렬 키 함수의 return값
    // 두개의 함수가 순번이 같다면 0을 반환
    // 만약 v1이 v2보다 앞이면 -1을 반환
    // 그 반대라면 1을 반환
    if(v1 < v2) return 1;
    if (v1 > v2) {
        return -1;
    } else {
        return -0;
    }
});

// sqlit
const str = "JavaScript is something strange than other language";
let chunks = str.split(" ");
console.log(chunks);