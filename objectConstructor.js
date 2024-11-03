/*object constructor function allows you to create multiple instances 
          of an object type with the same properties and methods*/

function Student(name,age,place){
    this.name=name //placing values in object's name,age and place using this
    this.age=age
    this.place=place
    this.display= function(){
        console.log("\nName:"+this.name+"\nAge:"+this.age+"\nplace:"+this.place)
    }
    
}

// Creating a new instance of Student
var student1=new Student("Akhil",20,"Kochi")
var student2=new Student("JK",21,"Kochi")

// Calling the display method on student1,which is a function
student1.display()
student2.display()
