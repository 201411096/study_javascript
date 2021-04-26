// case_01
// bar(); //This won't throw an error
// function bar() {}
// foo(); //This will throw an error
// var foo = function() {}


// case_02        
// bar();
// function bar() {
//     foo(); //This will throw an error
// }
// var foo = function() {}

// case_03
// bar();
// function bar() {
//     foo(); //This _won't_ throw an error
// }
// function foo() {}

// case_04        
// function bar() {
//     foo(); //no error
// }
// var foo = function() {}
// bar();