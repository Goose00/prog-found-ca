// question 1
for(var i = 15; i <= 25; i++) {
    if (i % 2 === 0) console.log(i);
}

// question 2
function iAmFunction(innerFunction) {
    console.log("I am a function" + innerFunction);
}

var innerFunction = iAmFunction;

function outerFunction(outsideFunction) {
    (outsideFunction)(". That is what I am");
}

outerFunction("innerFunction");

/*Tried Answering question 2 but didn´t
manage to complete */