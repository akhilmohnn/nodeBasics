var hello= function(name){
    console.log("Name: "+name)
}

var hey= function(callBack){
    callBack("Akhil Mohanan")
}

hey(hello) //value hello is passed to hey,and it prints hello(value in hey)