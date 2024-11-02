var student={
    name:"Akhil",
    age:20,
    place:"Kochi",

    display : function(){
        console.log(this.name)  //using method to call the object value,it is accessible by using this
    }
}

student.stream="CS" //adding a new field to student

console.log(student)
console.log(student['name'])

console.log("\n")

for(i in student){
    console.log(student[i])
}

console.log("\n")
student.display() //calling the method in the object to print name
console.log("\n")
student.displayStream= function(){  //declaring an another method outside the object
    console.log(student.stream)
}

student.displayStream()