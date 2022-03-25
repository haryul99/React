class Shape {
    static create(x, y) { return new Shape(x, y); }
    // 속성의 정의 (ES7방식)
    name = "Shape";
    //생성자
    constructor(x, y) {
        this.name = "Shape";
        this.move(x, y);
    }
    // 메서드들
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    area() {
        return undefined;
    }
}

let s = new Shape(10, 20);
console.log(s, s.area());

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.name = "Circle";
        this.radius = radius;
    }
    // 메서드 오버라이드
    area() {
        return Math.PI * this.radius ** 2;
    }
}

let c = new Circle(0, 0, 3);
console.log(c, c.area());