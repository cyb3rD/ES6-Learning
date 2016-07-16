'use strict';
// Function default values
var getSomeData = function(someDefault = 123, type = 'someType') {
    console.log(someDefault + ', ' + type);
};

getSomeData(undefined, 'newType');  //123 newType

// Access to the context
var base = 5;
var multiplyByAndSum = function (param1, param2 = param1 * base) {
    console.log(param1 + param2);
};

multiplyByAndSum(10); // 60

// Access functions
var someFunc = () => 5;
var newMultiplyByAndSum = function (param1, param2 = param1 * someFunc()) {
    console.log(param1 + param2);
};

newMultiplyByAndSum(10); // 60

// Default argument ignored by arguments.length
var countArguments = function (arg1, arg2 = 'value') {
    console.log(arguments.length);
};

countArguments(200); // 1

// Creating dynamic function
var dynamicFunc = new Function("arg1 = 35", "return arg1");

console.log(dynamicFunc()); // 35