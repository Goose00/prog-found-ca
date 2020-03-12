// question 1
var pet = "dog";

console.log(pet);

// question 2
var person = {
    name: "alan",
    age: 34
};

console.log(person);

// question 3
var outOfStock = true;

if(outOfStock === true) {
    console.log("Out of stock")
}
else {
    console.log("In stock")
}

// question 4
var numberArray = [10, 20, 30, 40, 50];

for(var i = 0; i < numberArray.length; i++) {

console.log(numberArray[i]);
}

// question 5
for(var i = 15; i <= 25; i++) {
    console.log(i);
}

// question 6
for(var i = 15; i <= 25; i++) {
    if (i === 20) console.log(i);
}

// question 7
var houses = [
//house 1
    {
        colour: "White",
        floors: 4,
        sold: false
    },
//house 2
    {
        colour: "bluegray",
        floors: 2,
        sold: true
    }
]
for(var i = 0; i < houses.length; i++) {
    console.log(houses[i].floors);
    console.log(houses[i].sold);
}


// question 8
function whatIDontLike(thisFood) {
    console.log("I don't like " + thisFood)
}
whatIDontLike("smalahove");


// question 9
function subtraction(number1, number2) {
    var sum = number1 - number2;
    console.log(sum);
}
subtraction(400,250);

// question 10
var healthyFood = [];

function dinnerIdeas(mySuggestions) {
    healthyFood.push("salad");
    console.log(healthyFood);
}

dinnerIdeas("salad");