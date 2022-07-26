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

//curring
let multiply1=function(x,y)
{
    console.log(x*y)
}
    let multiplybytwo1=multiply1.bind(this,2)
    multiplybytwo1(5);

    let multiply2=function(x){
        return function(y){
            console.log(x*y)
        }
    }
    let multiplybytwo2=multiply2(2)
    multiplybytwo2(5);


