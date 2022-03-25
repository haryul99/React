function testForEach() {
    const source = ["바나나", "오렌", "사과", "맹고"];
    console.log("배열 :", source);
    // forEach : 배열의 개별 항목을 추출하여 콜백함수로 전달
    source.forEach(item => {
        console.log(item);
    })

    //콜백 함수 내부에서 인덱스가 필요한 경우
    source.forEach((item, index) => {
        console.log(index, "=>", item);
    });

    source.forEach((item, index, arr) => {
        console.log(index, "/", arr.length, "->", item);
    });

}

// testForEach();

function testSome() {
    //some, every  : 배열 내부요소를 점검할 때
    const data = [
        { name: "홍길동", age: 23 },
        { name: "윤희상", age: 27 },
        { name: "이영은", age: 3 }
    ]
    // data 배열에서 나이가 25세 초과한 객체가 있는가?
    // TODO : for 루프로 순화 age 필드가 > 25이 객체의 카운트를 출력

    console.log("some: age > 25", data.some(item => {
        return item.age > 25;
    }));
}
// testSome();

function testFilter(){
    const cource = [1,2,34,5,6,7,8,9,10];
    //2의 배수만 추출 -> 새배열로
    /// Es5 Way
    let result = [];
    for(let i =0; i< source.length; i++){
        if( source[i] % 2 ==0 ){
            result.push(source[i]);
        }
    }
    console.log("짝수 필터링(ES5):", result);

    //ES6 방식 필터링
    result = source.filter(item => item % 2 == 0);
    console.log("짝수 필터링(ES6:filter) : ", result);
}
// testFilter();
function testMap() {
    const source = [1,2,3,4,5,6,7,8,9,10];

    // 원본 배열의 오소를 2배한 새 배열을 생성
    // ES5방식
    let multiply = [];
    for (let i = 0; i < source.length; i++){
        multiply.push(source[i])*2
    }
    console.log("배열 변형(ES5):", multiply);
   

    //ES6방식(map)
    multiply = source.map(item => item *2);
    console.log("배열 변형(map):", multiply);
}
// testMap();

function testReduce(){
    const arr = [12, 4, 19, 33, 69];
    // arr의 모든 요소를 합산하라
    let sum = arr.reduce((acc, value, idx, arr)=>{
        // arr : 현재까지의 집계값, value : 현재 배열 요소, idx : 현재 요소의 인덱스,
        // arr : 원본 배열 자체
        console.log(`현재까지의 누산값 ${acc}`);
        console.log(`${arr}의 ${idx}번째 요소는 ${value}`);

        //acc과 현재 배열 요소의 집계를 return
        return acc + value;
    },0 /*기본값*/);
    console.log("결과 :", sum);

};

// testReduce();

function testReduce2(){
    const arr = [12, 4, 19, 33, 69];
    // 각 배열 요소들이 짝수? 홀수?
    let result = arr.reduce((acc, value) =>{
        console.log(value, "는", value % 2==0 ?"짝수":"홀수");
        acc.push(value % 2 ==0? "짝수": "홀수");
        return acc;
    },[]);
    console.log("홀짝:", result);
}
testReduce2();