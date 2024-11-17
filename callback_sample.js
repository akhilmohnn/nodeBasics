var d=new Date()

console.log("Hello")

for(i=0;i<100;i++){
    console.log("Loop")
}

console.log("End")
var diff=new Date()-d
console.log(diff)

function longTask(milliSeconds){
    var dt=new Date()
    while(new Date-dt <= milliSeconds){

    }
}

console.log("Started")
longTask(2000) 
console.log("Ended")

console.log("Started")
longTask(2000) 
console.log("Ended")

console.log("Started")
longTask(2000) 
console.log("Ended")  //synchronous process execution,last three process completes one after another