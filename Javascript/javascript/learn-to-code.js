// // var name =" jack ";
// // var age =" 23 ";
// // var message="Hi, my name is" + name + "and I am " + age + "years old";
// // console.log(message);
// var firstName = "John";
// var lastName ="JacobJingleHeimerSmith";
// var dateOfBirth="10-09-82";
// var age ="23";
// // var profileImgUrl="http://coolpicks.com/johnjacob.jpg";
// var loginWelcomMessage="Welcome," + firstName + ", Happy "+age +"rd birthday !";
// console.log(loginWelcomMessage);
// var myAccountBalance=700;
// var coupon=300
// var nikeSBshoes =200;
// if(nikeSBshoes<=myAccountBalance){
//     myAccountBalance-=nikeSBshoes;
//     console.log("We just bought some dope shoes !");
//     console.log("Account balance : " + myAccountBalance);
// } else if(nikeSBshoes-coupon<=myAccountBalance){
//     myAccountBalance-=nikeSBshoes-coupon;
//     console.log("We just bought some dope shoes with a coupon");
//     console.log("Account balance : " + myAccountBalance);
// } else {
//     console.log("You too broke fo shoes bra !");
// }
//##################################################################################################
// array in JS
// var student1 = "jimmy";
// var student2 ="tommy";
// var student3 ="Arum";

// var student =["Jimmy", "Janessa", "Arun"];
// var naughtyList=[];

// naughtyList.push(student[0]);
// console.log(naughtyList);
// var index=naughtyList.indexOf("Jimmy");
// console.log(index);
// if(index>-1){
//     naughtyList.splice(index,1);
// }
// console.log(naughtyList);
//######################################################################################
//function
// function area(length, width){
//     return length * width;
// }
// var rectangleArea=[];
// rectangleArea.push(area(2,3));
// rectangleArea.push(area(3,4));
// rectangleArea.push(area(4,5));
// console.log(rectangleArea);
var bankBalance = 500;
// function makeTransaction(priceOfSale){
//     if(priceOfSale<bankBalance){
//         bankBalance-=priceOfSale;
//         console.log("Purchase successful")
//     } else{
//         console.log("Insufficient Funds");
//     }
// }
// console.log(bankBalance);
// makeTransaction(30);
// console.log(bankBalance);
// makeTransaction(2.32);
// console.log(bankBalance);

// var transaction = function(priceOfSale){
//     if(priceOfSale<bankBalance){
//         bankBalance-=priceOfSale;
//         console.log("Purchase successful")
//     } else{
//         console.log("Insufficient Funds");
//     }
// }

// transaction(10);

// var customesName = function(first, last){
//     console.log("First name : " + first + " Last name :" + last);
// }
// customesName("Hai", "Dinh");
//##########################################################Objects##########################
var students=[];
// var student0={
//     firstName: "Jayne",
//     lastName : "Looo",
//     age : 20,
//     ***********greeting : function() {
//            return "Hi, I'm " + this.firstName + " and i'm " + this.age  + "years old";
//     }
// };

function Student(first, last, age){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.greeting=function(){
        return "Hi, I'm " + this.firstName + " and i'm " + this.age  + "years old";
             };
    }
    students.push(new Student("jennt", "Laga", 5));
    students.push(new Student("Timmy","Turner", 8));
    students.push(new Student("Carl", "Jr", 4));


// var student1= new Object();
// student1.firstName="John";
// student1.lastName="Parker";
// student1.age=8;

// var student2={};
// student2.firstName="Zack";
// student2.lastName="Bobo";
// student2.age=5;

// var students =[];
// students.push(student0);
// students.push(student1);
// students.push(student2);

for (var index=0; index < students.length; index++){
    console.log(students[index].greeting());
}

// console.log(student0.firstName);
// console.log(student0.lastName); 
//console.log(student0.greeting());
// console.log(student0["firstName"]);
// console.log(student0["lastName"]);