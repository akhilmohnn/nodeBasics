var d= new Date("03 november 2024") //Date is object constructor,predefined

console.log("Day:"+d.getDate())
console.log("\nMonth:"+d.getMonth())
console.log("\nYear:"+d.getFullYear())

var now = new Date();
console.log(now); // Outputs the current date and time

const d1 = new Date();
d1.setFullYear(2020);
console.log(d1)

const d2 = new Date();
d2.setFullYear(2020, 11, 3);