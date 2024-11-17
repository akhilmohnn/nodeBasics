class outerClass {
    sampleHello() {
        console.log("This is a sample program");
    }
}

class innerClass extends outerClass {
    constructor(num1, num2) {
        super();
        this.num1 = num1;
        this.num2 = num2;
    }
    hello() {
        console.log("hello " + (this.num1 + this.num2));
    }
}


let hey = new innerClass(10, 20);
hey.hello();          // Calls hello() from innerClass
hey.sampleHello();    // Calls sampleHello() from outerClass
