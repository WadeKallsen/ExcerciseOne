//create a variable to hold the quantity of available plane seats left on a flight
var planeSeatsLeft = 10;
		
//create a variable to hold the cost of groceries at checkout
var costOfGroceries = 58.99;

//create a variable to hold a person's middle initial
var middleInitial = "E";

//create a variable to hold true if it's hot outside and false if it's cold outside
var isHotOutside = true;

//create a variable to hold a customer's first name
var customerFirstName = "Jeff";

//create a variable to hold a street address
var streetAddress = "123 Easy St.";

//print all variables to the console
console.log(planeSeatsLeft);
console.log(costOfGroceries);
console.log(middleInitial);
console.log(isHotOutside);
console.log(customerFirstName);
console.log(streetAddress);



//a customer booked 2 plane seats, remove 2 seats from the available seats variable
planeSeatsLeft = planeSeatsLeft - 2;
console.log(planeSeatsLeft);

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
costOfGroceries = costOfGroceries + 2.15;
console.log(costOfGroceries);


//birth certificate was printed incorrectly, change the middle initial to something else
var middleInitial = "H";
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = !isHotOutside;
console.log(isHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = customerFirstName + " " + middleInitial + " Scott ";
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log("Hello " + fullName + " you live at " + streetAddress);