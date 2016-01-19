// 2.A.1.1
// Examples of really cramped syntax

if(condition) doSomething();

while(condition) iterating++;

for(var i=0;i<100;i++) someIterativeFn();


// 2.A.1.1
// Use whitespace to promote readability

if ( condition ) {
  // statements
}

while ( condition ) {
  // statements
}

for ( var i = 0; i < 100; i++ ) {
  // statements
}

// Even better:

var i,
  length = 100;

for ( i = 0; i < length; i++ ) {
  // statements
}

// Or...

var i = 0,
  length = 100;

for ( ; i < length; i++ ) {
  // statements
}

var prop;

for ( prop in object ) {
  // statements
}


if ( true ) {
  // statements
} else {
  // statements
}

// 2.B.1.1
// Variables
var foo = "bar",
  num = 1,
  undef;

// Literal notations:
var array = [],
  object = {};


// 2.B.1.2
// Using only one `var` per scope (function) or one `var` for each variable,
// promotes readability and keeps your declaration list free of clutter.
// Using one `var` per variable you can take more control of your versions
// and makes it easier to reorder the lines.
// One `var` per scope makes it easier to detect undeclared variables
// that may become implied globals.
// Choose better for your project and never mix them.

// Bad
var foo = "",
  bar = "";
var qux;

// Good
var foo = "";
var bar = "";
var qux;

// or..
var foo = "",
  bar = "",
  qux;

// or..
var // Comment on these
foo = "",
bar = "",
quux;

// 2.B.1.3
// var statements should always be in the beginning of their respective scope (function).


// Bad
function foo() {

  // some statements here

  var bar = "",
    qux;
}

// Good
function foo() {
  var bar = "",
    qux;

  // all statements after the variables declarations.
}

// 2.B.1.4
// const and let, from ECMAScript 6, should likewise be at the top of their scope (block).

// Bad
function foo() {
  let foo,
    bar;
  if ( condition ) {
    bar = "";
    // statements
  }
}
// Good
function foo() {
  let foo;
  if ( condition ) {
    let bar = "";
    // statements
  }
}


// 2.B.2.1
// Named Function Declaration
function foo( arg1, argN ) {

}

// Usage
foo( arg1, argN );

// 2.B.2.2
// Named Function Declaration
function square( number ) {
  return number * number;
}

// Usage
square( 10 );

// Really contrived continuation passing style
function square( number, callback ) {
  callback( number * number );
}

square( 10, function( square ) {
  // callback statements
});


// 2.B.2.3
// Function Expression
var square = function( number ) {
  // Return something valuable and relevant
  return number * number;
};

// Function Expression with Identifier
// This preferred form has the added value of being
// able to call itself and have an identity in stack traces:
var factorial = function factorial( number ) {
  if ( number < 2 ) {
    return 1;
  }

  return number * factorial( number - 1 );
};


// 2.B.2.4
// Constructor Declaration
function FooBar( options ) {

  this.options = options;
}

// Usage
var fooBar = new FooBar({ a: "alpha" });

fooBar.options;
// { a: "alpha" }


// 2.C.1.1
// Functions with callbacks
foo(function() {
  // Note there is no extra space between the first paren
  // of the executing function call and the word "function"
});

// Function accepting an array, no space
foo([ "alpha", "beta" ]);

// 2.C.1.2
// Function accepting an object, no space
foo({
  a: "alpha",
  b: "beta"
});

// Single argument string literal, no space
foo("bar");

// Inner grouping parens, no space
if ( !("foo" in obj) ) {

}

// 2.D.1.1

if (condition) {
  // statements
}

while (condition) {
  // statements
}

for (var i = 0; i < 100; i++) {
  // statements
}

if (true) {
  // statements
} else {
  // statements
}


// 3.B.1.1

// `foo` has been declared with the value `0` and its type is `number`
var foo = 0;

// typeof foo;
// "number"
...

// Somewhere later in your code, you need to update `foo`
// with a new value derived from an input element

foo = document.getElementById("foo-input").value;

// If you were to test `typeof foo` now, the result would be `string`
// This means that if you had logic that tested `foo` like:

if ( foo === 1 ) {

  importantTask();

}

// `importantTask()` would never be evaluated, even though `foo` has a value of "1"


// 3.B.1.2

// You can preempt issues by using smart coercion with unary + or - operators:

foo = +document.getElementById("foo-input").value;
//    ^ unary + operator will convert its right side operand to a number

// typeof foo;
// "number"

if ( foo === 1 ) {

  importantTask();

}

// `importantTask()` will be called



// 3.B.2.1

var number = 1,
  string = "1",
  bool = false;

number;
// 1

number + "";
// "1"

string;
// "1"

+string;
// 1

+string++;
// 1

string;
// 2

bool;
// false

+bool;
// 0

bool + "";
// "false"


var number = 1,
  string = "1",
  bool = true;

string === number;
// false

string === number + "";
// true

+string === number;
// true

bool === number;
// false

+bool === number;
// true

bool === string;
// false

bool === !!string;
// true


// 3.B.2.3

var array = [ "a", "b", "c" ];

!!~array.indexOf("a");
// true

!!~array.indexOf("b");
// true

!!~array.indexOf("c");
// true

!!~array.indexOf("d");
// false

// Note that the above should be considered "unnecessarily clever"
// Prefer the obvious approach of comparing the returned value of
// indexOf, like:

if ( array.indexOf( "a" ) >= 0 ) {
  // ...
}


// 3.B.2.4


var num = 2.5;

parseInt( num, 10 );

// is the same as...

~~num;

num >> 0;

num >>> 0;

// All result in 2


// Keep in mind however, that negative numbers will be treated differently...

var neg = -2.5;

parseInt( neg, 10 );

// is the same as...

~~neg;

neg >> 0;

// All result in -2
// However...

neg >>> 0;

// Will result in 4294967294

// 4.1.7
// When only evaluating a ref that might be null or undefined, but NOT false, "" or 0,
// instead of this:
if ( foo === null || foo === undefined ) ...

// ...take advantage of == type coercion, like this:
if ( foo == null ) ...

// Remember, using == will match a `null` to BOTH `null` and `undefined`
// but not `false`, "" or 0
null == undefined
