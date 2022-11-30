/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let array1 = [1, 2, 3, 4, 5];
console.log(array1);
console.log("\n")

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let me = {
    name: "Mantas",
    surname: "Petrosius",
    email: "mantas.petrosius@outlook.com",
    age: 24
};
console.log(me);
console.log("\n")
/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

me.license = false;
console.log(me);
console.log("\n")

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete me.age;
console.log(me);
console.log("\n")

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let someone = {
    name: "Thomas",
    surname: "Engine",
    email: "thomas.thetankengine@gmail.com",
};
console.log(someone);
if(me.email !== someone.email){
    console.log("Emails are different.\n")
}else{
    console.log("Emails are same.\n")
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 0;
let shipping = 10;
let totalAmountSpent = 90;

if(totalAmountSpent > 50){
    totalShoppingCart = totalAmountSpent ;
    console.log("Your total is: "+totalShoppingCart);
}else{
    totalShoppingCart = totalAmountSpent + shipping;
    console.log("Your total is: "+totalShoppingCart+"\n");
}


/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let totalCost = totalShoppingCart *0.2;
console.log(totalCost);
console.log("\n")

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car = {
    brand: "Toyota",
    model: "Avensis",
    licensePlate: "151-D-25121"
}
console.log(car)

let car2 = JSON.parse(JSON.stringify(car))
car2.licensePlate = "132-LH-1221";
console.log(car2);

let car3 = JSON.parse(JSON.stringify(car))
car3.licensePlate = "202-LH-112";
console.log(car3);

let car4 = JSON.parse(JSON.stringify(car))
car4.licensePlate = "171-WH-978";
console.log(car4);

let car5 = JSON.parse(JSON.stringify(car))
car5.licensePlate = "09-D-72841";
console.log(car5);
console.log("\n")
/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = [
    car,
    car2,
    car3,
    car4,
    car5
]
console.log(carsForRent);
/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift();
carsForRent.pop();
console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log("Type of car variable is: "+typeof car, "\n", "Type of licensePlate: "+ typeof car.licensePlate, "\n", "Type of brand: "+ typeof car.brand, "\n");

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [];
carsForSale[0] = [{brand: "BMW", model: "BMW i4", licensePlate: "142-D-12641"}];
carsForSale[1] = [{brand: "Nissan", model: "Maxima", licensePlate: "211-D-127"}];
carsForSale[2] = [{brand: "Lexus", model: "RC", licensePlate: "212-WH-3214"}];
let totalCars = carsForSale.length;
console.log("Number of cars for sale: "+totalCars, "\n");

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for(let i = 0; i<=totalCars; i++){
    console.log(carsForSale[i], "\n");
}
