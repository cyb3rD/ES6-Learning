// Arrow functions
'use strict';
var invoice = {
    number: 234,
    process: function(){
        return () => console.log(this.number);
    }
};

var newInvoice = {
    number: 123
};

//Can't bind new object to arrowFunc
invoice.process().bind(newInvoice)(); // 234