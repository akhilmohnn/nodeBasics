var read=require("readline-sync")


// var num1=parseInt(read.question("Enter num1:"))
// var num2=parseInt(read.question("Enter num2"))

while(1){
    console.log("1.Sum using sum1()\n2.sum using sum2(num1,num2)\n3.Sum using sum3()\n4.Sum using sum4(num1,num2)")
    var choice=parseInt(read.question("Enter choice:"));

    if(choice==1){
        sum1()
    }
    else if(choice==2){
        var n1=parseInt(read.question("Enter first number:"))
        var n2=parseInt(read.question("Enter second  number:"))
        sum2(n1,n2);
    }
    else if(choice==3){
        var result=sum3();
        console.log("Result from sum3():"+result)
    }
    
    return 0;
}

function sum1()
{
    var a,b;
    var a=parseInt(read.question("Enter num1"))
    var b=parseInt(read.question("Enter num2"))
    sum=a+b
    console.log("Sum from sum1 is:"+sum)


}

function sum2(a,b)
{

    sum=a+b;
    console.log("Sum is:"+sum)

}

function sum3(){
    var a=parseInt(read.question("Enter first number"))
    var b=parseInt(read.question("Enter second number"))
    return a+b

}
