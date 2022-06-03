// create a variable called speedLimit and another called mySpeed
// set their values to numbers between 1 and 100
var speedLimit = 65;
mySpeed = 63;

// using a conditional, determine if mySpeed is greater than the speedLimit
// if true, print "Slow Down! Mom is mad!" to the console
// if mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
// if mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
if (mySpeed > speedLimit){
        console.log("Slow down! Mom is mad!");
} else if (mySpeed == speedLimit){
        console.log("Everyone is happy!");
} else {
        console.log("Speed up! Dad is mad!");
}

// create two variables, one named alarmSet, the other openDoor
// set them to a boolean value
var alarmSet = true;
var openDoor = true;


// using a conditional, determine if alarm is set. 
// if alarm is set and door is set to open, print "Sound Alarm!" to the console
// otherwise, print "Everything is fine." to the console.

if (alarmSet && openDoor ){
        console.log("Sound Alarm!");
} else {
        console.log("Everything is fine.");
}


// create two variables, username and password
// create a conditional, if the username is "Tommy123" and the password is "12345"
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to the console
// otherwise, print "Admin Access Denied"
var username = "Timmy456";
var password = "6789";

if (username == "Tommy123" && password == "12345" || username == "Timmy456" && password == "6789"){
        console.log("Admin Login Succesful");
} else {
        console.log("Admin Access Denied");
}




// write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
// Anything other than these values will return "Error" to the console

switch(studentClass = 13){
    case 6:
        console.log(studentGrade = "Elementary");
    break;
    case 7:
        console.log(studentGrade = "Middle");
    break;
    case 8:
        console.log(studentGrade = "Middle");
    break;
    case 9:
        console.log(studentGrade = "Freshman");
    break;
    case 10:
        console.log(studentGrade = "Sophmore");
    break;
    case 11:
        console.log(studentGrade = "Junior");
    break;
    case 12:
        console.log(studentGrade = "Senior");
    break;
    default:
        console.log("Error"); 
}


// write a for loop that will iterate backwards from 10 to -10

for (var i = 10; i >=-10; i--){
    console.log(i);
}

// write a do/while loop that prints 1 through 50
var i = 1;

while (i <=50){
    console.log(i);
    i++;
}



// edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4
var i = 1;
while (i<=50){
    if (i % 4 == 0 ){
        console.log(i);
    } i++;
}

// Someone messed up the following for loop
// fix the following infinite loop, uncomment to test

    for (let i = 1; i < 10; i++){
        console.log(i);
    } 
