// Arrow functions
// 
'use strict';
var invoice = {
    number: 234,
    process: function(){
        return () => console.log(this.number);
        // this refers to the context in which it apperars
    }
};

var newInvoice = {
    number: 123
};

// 1.
// Can't bind new object to arrowFunc
// with bind(), call(), apply() can't change value of this
invoice.process().bind(newInvoice)(); // 234

invoice.process().call(newInvoice);   // 234

// 2.
// Don't have access to "prototype"
var getPrice = () => 7.77;
console.log(getPrice.hasOwnProperty("prototype")); // false
