//함수
function sum(a, b){
    return a+b;
}
console.log(sum(3,6));

//함수 표현식(익명함수)
const asum = function(a, b){
    return a+b;
}
console.log(typeof asum, asum(10,30));

//함수 매개변수
function getNumberTotal(){

// console.log(arguments);
    let result = 0;
    for(let i =0; i < arguments.length; i++){
        if(typeof arguments[i] =="number")
        result += arguments[i];
    }
    return result;
}
console.log(getNumberTotal(2,4,5,2));
console.log(getNumberTotal(2,4,"3",2));

//javascript의 함수
//함수는 1급 시민 함수는 number, String등과 동등한 객체이다.
// 특정 함수의 인수로 전달될 수 있고, 함수의 출력으로 리턴될 수 있다.

function calc(val1, val2, func){ // 값1, 값2, 함수 전달받음
    if(typeof func == "function"){//함수인지 체크
        func(val1, val2); //함수 내부에서 거꾸로 호출된 함수를 콜백함수라 함
    }
}

//콜백함수 사용
calc(3, 4, function(v1, v2){
    console.log(v1+v2);
});

//계산기 함수
calc(3, 4, function(v1, v2){
    console.log(v1 * v2);
})

//ES6에서는 특수한 함수가 존재 (화살표 표기법)
const f1 = function(){return "hello";} //인수 x 출력 O
const f1Arrow = () => "hello"; //인수 x 출력 O
const f1c = (va1, va2) => va1 * va2; //인수 O 출력 O
const f2 = (name) => "hello "+name;
// 메모리 사용이 살짝 다름

console.log(f1(), f1Arrow());
console.log(f1c(3,5));
console.log(f2("haryul"));

// 화살표 함수 
// 콜백함수를 화살표 함수로 만드는 경우가 많음

calc(10, 20, (v1, v2) => {
    console.log(v1, v2);
});