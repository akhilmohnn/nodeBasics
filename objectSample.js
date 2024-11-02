var student={
    name:"Akhil",
    age:20,
    place:"Kochi",

    display : function(){
        console.log(this.name)  //using method to call the object value
    }
}

console.log(student)
console.log(student['name'])

console.log("\n")

for(i in student){
    console.log(student[i])
}

console.log("\n")
student.display() //calling the method in the object to print name