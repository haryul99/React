// 배열 전개 연산

const arr1 = ['윤희상','박하률'];
const arr2 = ['뭘봐 사공현호','이영은'];
console.log(arr1, arr2);

// 두 배열을 하나로 합칠 때
//방법....1 개별 요소를 직접 접근해서 추출
let combined = [];
combined = [arr1[0], arr1[1], arr2[0],arr2[1] ];
console.log("combined m1:",combined);

//방법...2 Array.concat 메서드
combined = arr1.concat(arr2);
console.log("combined m2:", combined);

//방법...3 contect메서드
combined = [].concat(arr1, arr2);
console.log("combined m3: ", combined);

// ES6 Way
combined = [...arr1, ...arr2] //...
console.log("ES6 spread:", combined);

// 배열의 전개
let [first, second, third = "empty", ...others] = arr1; //
console.log(first, second, third, others);

[first, second, third = "empty", ...others] = combined; 
console.log(first, second, third, others);

// 객체의 전개
const obj1 = {one: 1, two : 2, other:0};
const obj2 = {three:3, four:4, other: -1};
console.log(obj1, obj2);
//기존방식
combined ={
    one: obj1.one,
    two : obj1.two,
    thr:obj2.three,
    four:obj2.four,
    other:obj2.other
};
console.log("combined obj: ",combined);
// 다른 방식
combined={
    ...obj1,
    ...obj2, //모든 속성 전개
};
console.log("combied obj1, obj2 :", combined);
//전개 순서 변경
combined ={
    ...obj2,
    ...obj1
};
console.log("combied obj2, obj1 :", combined);