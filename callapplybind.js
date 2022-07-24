var obj ={num:6};
var addToThis=function(a,b,c){
    return this.num+a+b+c;
}
console.log(addToThis.call(obj,3,4,6))


var arr=[5,6,7]
console.log(addToThis.apply(obj,arr))


var bound=addToThis.bind(obj)
console.log(bound(1,2,3))


//Create a new object called Student with age 20 ,
// write a function which prints the age of the student from the student object.
var student={age:20}
var printage=function(student){
    return this.age
}
console.log(printage.call(student))