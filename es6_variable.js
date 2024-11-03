var a=10

var a=20 //initializing with same name erases the previous assigned value

console.log(a)

//To avoid this "let" is used,it only allows single usage of name in declaration

let n=40

//let n=30    using this line will cause an error

console.log(n)

function topFunction(){
    var i=0
    if(i==0){
        var j=1
        let hey=200
        console.log("Value of hey: "+hey)  //it will only print inside this block
    }

    console.log(j) //it will print the j value that is a "var"
    //console.log(hey)   this will cause an error, hey is not accessible from here,it is only available inside the declared block
}

topFunction()