console.log("Hello, Welcometo the food app");
console.log("Let's create an account");
var username = prompt("Create a username");
var password = prompt("Create a password");
console.log("Thank you, your account have been created");

console.log("Please enter your login information");
var tryuser = prompt("Username");
var trypass = prompt("Password");

while(username!=tryuser && password!=trypass){
console.log("Wrong username or password, Please try again");
var tryuser = prompt("Enter your username");
var trypass = prompt("Enter your password");
}

console.log("You are in!");

var balance = 500;
console.log("Your current balance is "+balance +" Pesos ");
var q1 = prompt("Would you like to add money to your account?");

if(q1=="yes"){
var q2 = prompt("How much would you like to add?");
var balance = balance + Number(q2);
console.log("Your new balance is "+ balance +" Pesos");

}else{
console.log("great!");
}

 q4 = prompt("Would you like a burger?");

 if(q4=="yes"){
console.log("Choose what burger you want");
var burgertypes = ["Jmburger","Macmacburger","Rusburger"];
var prices =[150,200,180];
console.log("Choice 1: "+burgertypes[0]+" "+prices[0]+" Pesos");
console.log("Choice 2: "+burgertypes[1]+" "+prices[1]+" Pesos");
console.log("Choice 3: "+burgertypes[2]+" "+prices[2]+" Pesos");

var q5 = prompt("What is your choice");
if(q5=="Choice 1"){
console.log("You have ordered a  "+ burgertypes[0]);
console.log("The total of the order is "+prices[0]+" Pesos");
var balance = balance - prices[0];
console.log("You have "+balance+" left on your balance"); 
}else if(q5=="Choice 2"){
console.log("You have ordered a  "+ burgertypes[1]);
console.log("The total of the order is "+prices[1]+" Pesos");
var balance = balance - prices[1];
console.log("You have "+balance+" left on your balance");
}else if(q5=="Choice 3"){
console.log("You have ordered a  "+ burgertypes[1]);
console.log("The total of the order is "+prices[1]+" Pesos");
var balance = balance - prices[1];
console.log("You have "+balance+" left on your balance");
}
}else{
console.log("Have a good day kupal!");
}