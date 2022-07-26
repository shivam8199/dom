class student{

    static count=0;  //static variable to call

    

   constructor(name,age,ph_no,marks){

       this.name=name;

       this.age=age;

       this.ph_no=ph_no;

       this.marks=marks;

       student.countStudent();

   }

   static countStudent(){

       

       return(student.count++);     //this is how u access static variable

   }

   eligible(){

       if(this.marks >=40){

           console.log(`${this.name} age ${age} is eligible`);

       }

       else if(this.marks<40){

           console.log(`${this.name} age ${age} is not eligible`);

       }

   }







   

}

const Riya=new student('Riya',18,1234,34);

const Hiya=new student('Hiya',15,2345,35);

const Diya=new student('Diya',16,4567,60);

const Siya=new student('Siya',17,7891,70);

const Rooh=new student('Rooh',19,3456,80);

console.log(student.countStudent());

Riya.eligible();

Hiya.eligible();

Diya.eligible();

Siya.eligible();

Rooh.eligible();