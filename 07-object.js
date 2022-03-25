//객체 생성...1
/*
const person = new Object(); // 새 오브젝트
//동적으로 속성을 추가할 수 있음
console.log(person);

person.name = "박하률";
person.age = 24;
person.showInfo = function(){
    let message =`Name : ${this.name}, Age : ${this.age}`
    console.log(message);
}

console.log(person);
person.showInfo();
*/
//객체 생성...2
//json사용
// KEY:VALUE 쌍으로 속성을 구성
/*
const person ={
    name : "박하률",
    age : 24,
    showInfo: function(){
        console.log(`Name :${this.name}, Age ${this.age}`)
    }
}
console.log(person);
person.showInfo(); //함수에 직접 접근하려면 .을 사용

*/
//객체 생성...3
//prototype 영역(공유 영역)
const Member = function(name, position){
    this.name = name;
    this.position = position;
}
let m1 = new Member("강백호", "PF");
let m2 = new Member("서태웅", "SF");

console.log(m1, m2)

//  동적으로 속성을 추가할 수 있다.
m1.SayHi = function(){
    console.log(`${this.name}님이 부릅니다.`)
}


//prototype영역을 이용하면 해당 객체를 new해서 만든 모든 객체에 특정속성을 공유 시킬 수 있다.
// 상속의 일부 개념을 구현 가능
console.log(m1.costructor); //기반 클래스 확인
console.log(Member.prototype); //공유 영역 확인

// 프로토 타입 영역에 공유 속성 추가
Member.prototype.introduce = function(){
    console.log(`Name :${this.name}, poistion :${this.position}`);
}

console.log(Member.prototype);

m1.introduce();
m2.introduce();