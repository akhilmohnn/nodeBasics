var read=require("readline-sync")
void sum1();
void sum2(n1,n2);

var num1=parseInt(read.question("Enter num1:"))
var num2=parseInt(read.question("Enter num2"))

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
    
    return 0;
}


