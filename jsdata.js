// String
var myName = "Mizan Rahman";
console.log("Hello, My name is:", myName);
console.log("And the name is printed as string variable. I mean the typeof data is:", typeof myName);

// boolean
var dataType=myName;
var myNameIsString=true;
console.log(dataType, "is a string datatype:", myNameIsString);

// numeric (with a little bit string!)
var sleepingHour=10; var Hour= "P.M";
console.log("My sleeping time is:", sleepingHour, Hour);

// Number converted to string and other cases...
var orangePrice = 220;
var chocolatePrice = 400;
var applePrice = 250;

console.log ("This is the addition of two variables: 220 and 250 =", orangePrice+applePrice);

var orangePrice = 220;
var chocolatePrice = 400;
var applePrice = '250';

console.log("Here I have made 250 a string and the addition looks like it:", orangePrice+applePrice);

var orangePrice = 220;
var chocolatePrice = 400;
var applePrice = parseInt ('250');

console.log("Interesting thing: Here I have made 250 an integer using parseInt function and the addition looks ok again:", orangePrice+applePrice);
