// console.log("Hello Welcome to JavaScript proramming")

// variables
// In the js ther are three types of variables 
// 1.let ,const,var

// let name = 12;
// name = "Digvijay"
// console.log(name)

// const age = 22.4;
// age = 15
// console.log("age : " + age)

// var city = "Pune";
// city = "Baramati"
// console.log("city : "+ city)


// datatype

// var student_name = "Rahul"   //string
// var age = 23     //Number
// var  passed = true //Boolean
// var result;   //undefined variable
// var selected = null;  //null

// var colours = ["red","blue"]  ///Array


// console.log(typeof student_name)
// console.log(typeof age)
// console.log(typeof result)
// console.log(typeof selected)
// var student = {
//     student_name : "amit",
//     age : 23
// }   //object {key:value}

// console.log(student.student_name)
// console.log(student.age)


// let age = 22;
// let hasID = true;
// console.log(age >= 18 && hasID)
// console.log(age >= 28 || hasID)
// console.log(!hasID)


//conditional statements 
//if  
// let marks = 5
// if (marks >=35) {
//     console.log("congrats you are passed !!!")
// } else {
//     console.log("you are fail. you can die!!!")
// }

//if student more than 90 print GRade A more 60
//print grade b and more 35 print needs imporvemnt
//else you are failed 
// let marks = 5
// if (marks>90) {
//     console.log("Grade A!!!")
// } else if (marks>60) {
//     console.log("Grade B")
// } else if (marks>35){
//     console.log("needs improvement")
// } else{
//     console.log("failed")
// }


// console.log("true" == "true") 
// console.log(5 === 6) //value should be number and value should same

/// both side datatypes should be same and value should be same
///switch
// let day = 4 

// switch (day) {
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Teusday")
//         break;
//     case 3:
//         console.log("Invalid")
//         break;
//     default:
//         console.log("Invalid Day")
//         break;
// }

//looping statement
//condtion and updation
// let a = 1
// while (a <= 5){
//     console.log(a) //1 2 3 4 5
//     a++; // a = 6
// }


// let a = 10
// while (a > 0){
//     console.log(a) //10 9 8 7 6 5 4 3 2 1
//     a--; // a =0
// }
// for (variable defination; condition ; updation)

// for (let a = 10 ; a>0 ; a--) {
//    console.log(a + " for loop")
    
// }

//functions

////syntax function function_name(function_args){
///      logic
//}
// let a = 10 
// function greet(){
//    //logic
//    console.log('In Function!!')
// //    console.log("Good Mornings")
// // }
// // Function call Statement 
// //syntax function_name(args)
// function greet(name,name2) {
//    console.log("Hello "+name)
//    console.log("Hello "+name2)
   
// }
// greet("Rahul","divyani") //function call statement 

//write a function to print the values from based
//  user requirment
function print_numbers(start_value,end_value){
   for (let i = start_value; start_value<= end_value; start_value++) {
      console.log(start_value)
      
   }
}
// console.log(print_numbers)

///Homework create a function for all calculation operator
//and just take 2 arguments 

//objects 
let student = {
   sname : "Rahul",//key: value
   age : 35,
   course:"Javascript"
}
// console.log(student.sname)
// student.sname = "Divyani"
// console.log(student.sname)
// console.log(student.age)
// console.log(student.course)

// let person= {
//    pname : "Rahul",
//    greet : function(){
//       console.log("Hello, "+this.pname) //person addrees.pname
//    }
// }

// console.log(person.greet())

function add(a,b) {
   return a+b //1+2
  
}
console.log(add(1,2))
let result  = add(1,2)
console.log(result)