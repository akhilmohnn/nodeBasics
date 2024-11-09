class outerClass{
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
    }

    AddFunction(){
        console.log("Sum is:"+ (this.num1+this.num2))
    }
}

let value=new outerClass(10,20)  //passing values to outer class,storing in 'value'

value.AddFunction()  //calling the addFunction with respect to 'values'