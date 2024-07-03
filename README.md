# JavaScript_With_Hitesh_Sir-
code repo for JavaScript Serise with Hitesh sir ❤️..............



## [[⬆]](#toc) <a name=JavaScript>JavaScript</a> Interview Questions
#### Q1: What is Coercion in JavaScript? 
**Answer:**
In JavaScript conversion between different two build-in types called `coercion`.  Coercion comes in two forms in JavaScript: *explicit* and *implicit*.

Here's an example of explicit coercion:
```js
var a = "42";

var b = Number( a );

a;				// "42"
b;				// 42 -- the number!
```
And here's an example of implicit coercion:
```js
var a = "42";

var b = a * 1;	// "42" implicitly coerced to 42 here

a;				// "42"
b;				// 42 -- the number!
``` 

#### Q2: Explain equality in JavaScript ⭐
**Answer:**
JavaScript has both strict and type–converting comparisons: 
* **Strict comparison (e.g., ===)** checks for value equality without allowing *coercion*
* **Abstract comparison (e.g. ==)** checks for value equality with *coercion* allowed

```js
var a = "42";
var b = 42;

a == b;			// true
a === b;		// false
```
Some simple equalityrules:
* If either value (aka side) in a comparison could be the `true` or `false` value, avoid `==` and use `===`.
* If either value in a comparison could be of these specific values (`0`, `""`, or `[]` -- empty array), avoid `==` and use `===`.
* In all other cases, you're safe to use `==`. Not only is it safe, but in many cases it simplifies your code in a way that improves readability.

#### Q3: What is typeof operator? ⭐
**Answer:**
JavaScript provides a `typeof` operator that can examine a value and tell you what type it is:
```js
var a;
typeof a;				// "undefined"

a = "hello world";
typeof a;				// "string"

a = 42;
typeof a;				// "number"

a = true;
typeof a;				// "boolean"

a = null;
typeof a;				// "object" -- weird, bug

a = undefined;
typeof a;				// "undefined"

a = { b: "c" };
typeof a;				// "object"
```


#### Q4: What is the object type? ⭐
**Answer:**
The object type refers to a compound value where you can set properties (named locations) that each hold their own values of any type. 

```js
var obj = {
	a: "hello world", // property
	b: 42,
	c: true
};

obj.a;		// "hello world", accessed with doted notation
obj.b;		// 42
obj.c;		// true

obj["a"];	// "hello world", accessed with bracket notation
obj["b"];	// 42
obj["c"];	// true
```
Bracket notation is also useful if you want to access a property/key but the name is stored in another variable, such as:
```js
var obj = {
	a: "hello world",
	b: 42
};

var b = "a";

obj[b];			// "hello world"
obj["b"];		// 42
```

#### Q5: Explain arrays in JavaScript ⭐
**Answer:**
An `array` is an object that holds values (of any type) not particularly in named properties/keys, but rather in numerically indexed positions:

```js
var arr = [
	"hello world",
	42,
	true
];

arr[0];			// "hello world"
arr[1];			// 42
arr[2];			// true
arr.length;		// 3

typeof arr;		// "object"
```


#### Q6: What is Scope in JavaScript? ⭐
**Answer:**
In JavaScript, each function gets its own *scope*. Scope is basically a collection of variables as well as the rules for how those variables are accessed by name. Only code inside that function can access that function's scoped variables.

A variable name has to be unique within the same scope. A scope can be nested inside another scope. If one scope is nested inside another, code inside the innermost scope can access variables from either scope.

#### Q7: What does "use strict" do? ⭐⭐
**Answer:**
The `use strict` literal is entered at the top of a JavaScript program or at the top of a function and it helps you write safer JavaScript code by throwing an error if a global variable is created by mistake. For example, the following program will throw an error:

```js
function doSomething(val) {
  "use strict"; 
  x = val + 10;
}`
```

It will throw an error because `x` was not defined and it is being set to some value in the global scope, which isn't allowed with `use strict` The small change below fixes the error being thrown:

```js
function doSomething(val) {
  "use strict"; 
  var x = val + 10;
}
```

**Source:** _coderbyte.com_

#### Q8: Explain Null and Undefined in JavaScript ⭐⭐
**Answer:**
JavaScript (and by extension TypeScript) has two bottom types: `null` and `undefined`. They are *intended* to mean different things:
* Something hasn't been initialized : `undefined`.
* Something is currently unavailable: `null`.

#### Q9: What's the difference between throw Error('msg') vs throw new Error('msg')? ⭐⭐
**Details:**
```js
var err1 = Error('message');
var err2 = new Error('message');
```
Which one is correct and why?

**Answer:**
Both are fine; the function call `Error(…)` is equivalent to the object creation expression `new Error(…)` with the same arguments.

**Source:** _stackoverflow.com_

#### Q10: Is there anyway to force using strict mode in Node.js? ⭐⭐
**Answer:**
you can place

```js
"use strict";
```

at the top of your file in **node >= 0.10.7**, but if you want your whole app to run in strict (**including external modules**) you can do this

```sh
node --use_strict
```

**Source:** _stackoverflow.com_

#### Q11: What's the difference between host objects and native objects? ⭐⭐
**Answer:**
* Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as `String`, `Math`, `RegExp`, `Object`, `Function`, etc.
* Host objects are provided by the runtime environment (browser or Node), such as `window`, `XMLHTTPRequest`, etc.

**Source:** _github.com/yangshun_

#### Q12: What is strict mode? ⭐⭐
**Answer:**
*Strict Mode* is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.

```js
// Non-strict code...

(function(){
  "use strict";

  // Define your library strictly...
})();

// Non-strict code...
```

#### Q13: What is the difference between `==` and `===`? ⭐⭐
**Answer:**
`==` is the abstract equality operator while `===` is the strict equality operator. The `==` operator will compare for equality after doing any necessary type conversions. The `===` operator will not do type conversion, so if two values are not the same type `===` will simply return `false`. When using `==`, funky things can happen, such as:

```js
1 == '1'; // true
1 == [1]; // true
1 == true; // true
0 == ''; // true
0 == '0'; // true
0 == false; // true
```

My advice is never to use the `==` operator, except for convenience when comparing against `null` or `undefined`, where `a == null` will return `true` if `a` is `null` or `undefined`.

```js
var a = null;
console.log(a == null); // true
console.log(a == undefined); // true
```

**Source:** _github.com/yangshun_

#### Q14: Explain the same-origin policy with regards to JavaScript. ⭐⭐
**Answer:**
The same-origin policy prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page through that page's Document Object Model.

**Source:** _github.com/yangshun_

#### Q15: Make this work ⭐⭐
**Details:**
```js
duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
```

**Answer:**
```js
function duplicate(arr) {
  return arr.concat(arr);
}

duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
```

**Source:** _github.com/yangshun_

#### Q16: FizzBuzz Challenge ⭐⭐
**Details:**
Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`.

**Answer:**
Check out this version of FizzBuzz:

```js
for (let i = 1; i <= 100; i++) {
  let f = i % 3 == 0,
    b = i % 5 == 0;
  console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
}
```

**Source:** _github.com/yangshun_

#### Q17: What is a Polyfill? ⭐⭐
**Answer:**
A polyfill is essentially the specific code (or plugin) that would allow you to have some specific functionality that you expect in current or “modern” browsers to also work in other browsers that do not have the support for that functionality built in.
* Polyfills are not part of the HTML5 standard
* Polyfilling is not limited to Javascript

**Source:** _programmerinterview.com_

#### Q18: Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those? ⭐⭐
**Answer:**
The `load` event fires at the end of the document loading process. At this point, all of the objects in the document are in the DOM, and all the images, scripts, links and sub-frames have finished loading.

The DOM event `DOMContentLoaded` will fire after the DOM for the page has been constructed, but do not wait for other resources to finish loading. This is preferred in certain cases when you do not need the full page to be loaded before initializing.



#### Q19: Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it? ⭐⭐
**Answer:**
Every script has access to the global scope, and if everyone uses the global namespace to define their variables, collisions will likely occur. Use the module pattern (IIFEs) to encapsulate your variables within a local namespace.



#### Q20: What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript? ⭐⭐
**Answer:**
Some examples of languages that compile to JavaScript include CoffeeScript, Elm, ClojureScript, PureScript, and TypeScript.

Advantages:

* Fixes some of the longstanding problems in JavaScript and discourages JavaScript anti-patterns.
* Enables you to write shorter code, by providing some syntactic sugar on top of JavaScript, which I think ES5 lacks, but ES2015 is awesome.
* Static types are awesome (in the case of TypeScript) for large projects that need to be maintained over time.

Disadvantages:

* Require a build/compile process as browsers only run JavaScript and your code will need to be compiled into JavaScript before being served to browsers.
* Debugging can be a pain if your source maps do not map nicely to your pre-compiled source.
* Most developers are not familiar with these languages and will need to learn it. There's a ramp up cost involved for your team if you use it for your projects.
* Smaller community (depends on the language), which means resources, tutorials, libraries, and tooling would be harder to find.
* IDE/editor support might be lacking.
* These languages will always be behind the latest JavaScript standard.
* Developers should be cognizant of what their code is being compiled to — because that is what would actually be running, and that is what matters in the end.

Practically, ES2015 has vastly improved JavaScript and made it much nicer to write. I don't really see the need for CoffeeScript these days.



#### Q21: What language constructions do you use for iterating over object properties and array items? ⭐⭐
**Answer:**
For objects:

* `for` loops - `for (var property in obj) { console.log(property); }`. However, this will also iterate through its inherited properties, and you will add an `obj.hasOwnProperty(property)` check before using it.
* `Object.keys()` - `Object.keys(obj).forEach(function (property) { ... })`. `Object.keys()` is a static method that will lists all enumerable properties of the object that you pass it.
* `Object.getOwnPropertyNames()` - `Object.getOwnPropertyNames(obj).forEach(function (property) { ... })`. `Object.getOwnPropertyNames()` is a static method that will lists all enumerable and non-enumerable properties of the object that you pass it.

For arrays:

* `for` loops - `for (var i = 0; i < arr.length; i++)`. The common pitfall here is that `var` is in the function scope and not the block scope and most of the time you would want block scoped iterator variable. ES2015 introduces `let` which has block scope and it is recommended to use that instead. So this becomes: `for (let i = 0; i < arr.length; i++)`.
* `forEach` - `arr.forEach(function (el, index) { ... })`. This construct can be more convenient at times because you do not have to use the `index` if all you need is the array elements. There are also the `every` and `some` methods which will allow you to terminate the iteration early.

Most of the time, I would prefer the `.forEach` method, but it really depends on what you are trying to do. `for` loops allow more flexibility, such as prematurely terminate the loop using `break` or incrementing the iterator more than once per loop.


#### Q22: What is let keyword in JavaScript? ⭐⭐
**Answer:**
In addition to creating declarations for variables at the function level, ES6 lets you declare variables to belong to individual blocks (pairs of { .. }), using the `let` keyword. 

**Source:** _github.com/getify_

#### Q23: Explain what a callback function is and provide a simple example. ⭐⭐
**Answer:**
A `callback` function is a function that is passed to another function as an argument and is executed after some operation has been completed. Below is an example of a simple callback function that logs to the console *after* some operations have been completed.

```js
function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function() {
  console.log("array has been modified", arr);
});
```


#### Q24: Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time ⭐⭐
**Answer:**
```js
// The output of the function should be 8
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

findMissingNumber(arrayOfIntegers, upperBound, lowerBound); // 8

function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
  // Iterate through array to find the sum of the numbers
  var sumOfIntegers = 0;
  for (var i = 0; i < arrayOfIntegers.length; i++) {
    sumOfIntegers += arrayOfIntegers[i];
  }

  // Find theoretical sum of the consecutive numbers using a variation of Gauss Sum.
  // Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
  // N is the upper bound and M is the lower bound

  upperLimitSum = (upperBound * (upperBound + 1)) / 2;
  lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;

  theoreticalSum = upperLimitSum - lowerLimitSum;

  return theoreticalSum - sumOfIntegers;
}
```



#### Q25: Remove duplicates of an array and return an array of only unique elements ⭐⭐
**Answer:**
```js
// ES6 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]

// ES5 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

uniqueArray(array); // [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
  var hashmap = {};
  var unique = [];

  for(var i = 0; i < array.length; i++) {
    // If key returns undefined (unique), it is evaluated as false.
    if(!hashmap.hasOwnProperty(array[i])) {
      hashmap[array[i]] = 1;
      unique.push(array[i]);
    }
  }

  return unique;
}
```

**Source:** _https://github.com/kennymkchan_

#### Q26: Explain Values and Types in JavaScript ⭐⭐
**Answer:**
JavaScript has typed values, not typed variables. The following built-in types are available:
* `string`
* `number`
* `boolean`
* `null` and `undefined`
* `object`
* `symbol` (new to ES6)

#### Q27: How would you check if a number is an integer? ⭐⭐
**Answer:**
A very simply way to check if a number is a decimal or integer is to see if there is a remainder left when you divide by 1.

```js
function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false
```



#### Q28: Given a string, reverse each word in the sentence ⭐⭐
**Details:**
For example `Welcome to this Javascript Guide!` should be become `emocleW ot siht tpircsavaJ !ediuG`

**Answer:**
```js
var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
```



#### Q29: Write a function that would allow you to do this. ⭐⭐
**Details:**
```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

**Answer:**
You can create a closure to keep the value passed to the function `createBase` even after the inner function is returned. The inner function that is being returned is created within an outer function, making it a closure, and it has access to the variables within the outer function, in this case the variable `baseNumber`.

```js
function createBase(baseNumber) {
  return function(N) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return baseNumber + N;
  }
}

var addSix = createBase(6);
addSix(10);
addSix(21);
```



#### Q30: How would you use a closure to create a private counter? ⭐⭐
**Answer:**
You can create a function within an outer function (a closure) that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function.

```js
function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function(increment) { _counter += increment; },
    retrieve: function() { return 'The counter is currently at: ' + _counter; }
  }
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5); 
c.add(9); 

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14
```



#### Q31: Implement enqueue and dequeue using only two stacks ⭐⭐
**Answer:**
*Enqueue* means to add an element, *dequeue* to remove an element.

```js
var inputStack = []; // First stack
var outputStack = []; // Second stack

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
  return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
  // Reverse the stack such that the first element of the output stack is the
  // last element of the input stack. After that, pop the top of the output to
  // get the first element that was ever pushed into the input stack
  if (stackOutput.length <= 0) {
    while(stackInput.length > 0) {
      var elementToOutput = stackInput.pop();
      stackOutput.push(elementToOutput);
    }
  }

  return stackOutput.pop();
}
```



#### Q32: How to check if an object is an array or not? Provide some code. ⭐⭐
**Answer:**
> The best way to find whether an object is instance of a particular class or not using `toString` method from `Object.prototype`

```javascript
var arrayList = [1 , 2, 3];
```

One of the best use cases of type checking of an object is when we do method overloading in JavaScript. For understanding this let say we have a method called `greet` which take one single string and also a list of string, so making our `greet` method workable in both situation we need to know what kind of parameter is being passed, is it single value or list of value?

```javascript
function greet(param) {
  if() {
    // here have to check whether param is array or not
  }
  else {
  }
}
```

However, in above implementation it might not necessary to check type for array, we can check for single value string and put array logic code in else block, let see below code for the same.

```javascript
 function greet(param) {
   if(typeof param === 'string') {
   }
   else {
     // If param is of type array then this block of code would execute
   }
 }
```

Now it's fine we can go with above two implementations, but when we have a situation like a parameter can be `single value`, `array`, and `object` type then we will be in trouble.

Coming back to checking type of object, As we mentioned that we can use `Object.prototype.toString`

```javascript
if(Object.prototype.toString.call(arrayList) === '[object Array]') {
  console.log('Array!');
}
```

If you are using `jQuery` then you can also used jQuery `isArray` method:

```javascript
if($.isArray(arrayList)) {
  console.log('Array');
} else {
  console.log('Not an array');
}
```

FYI jQuery uses `Object.prototype.toString.call` internally to check whether an object is an array or not.

In modern browser, you can also use:

```javascript
Array.isArray(arrayList);
```

`Array.isArray` is supported by Chrome 5, Firefox 4.0, IE 9, Opera 10.5 and Safari 5



#### Q33: How to empty an array in JavaScript? ⭐⭐
**Details:**
```js
var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
```
How could we empty the array above?

**Answer:**
**Method 1**

```javascript
arrayList = [];
```

Above code will set the variable `arrayList` to a new empty array. This is recommended if you don't have **references to the original array** `arrayList` anywhere else because It will actually create a new empty array. You should be careful with this way of empty the array, because if you have referenced this array from another variable, then the original reference array will remain unchanged, Only use this way if you have only referenced the array by its original variable `arrayList`.

For Instance:

```javascript
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList = []; // Empty the array
console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']
```

**Method 2**

```javascript
arrayList.length = 0;
```

Above code will clear the existing array by setting its length to 0. This way of empty the array also update all the reference variable which pointing to the original array. This way of empty the array is useful when you want to update all the another reference variable which pointing to `arrayList`.

For Instance:

```javascript
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList.length = 0; // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
```

**Method 3**

```javascript
arrayList.splice(0, arrayList.length);
```

Above implementation will also work perfectly. This way of empty the array will also update all the references of the original array.

```javascript
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList.splice(0, arrayList.length); // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
```

**Method 4**

```javascript
while(arrayList.length) {
  arrayList.pop();
}
```

Above implementation can also empty the array. But not recommended to use often.

**Source:** _github.com/ganqqwerty_

#### Q34: Write a "mul" function which will properly when invoked as below syntax. ⭐⭐
**Details:**
```javascript
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
```

**Answer:**
```javascript
function mul (x) {
  return function (y) { // anonymous function
    return function (z) { // anonymous function
      return x * y * z;
    };
  };
}
```

Here `mul` function accept the first argument and return anonymous function which take the second parameter and return anonymous function which take the third parameter and return multiplication of arguments which is being passed in successive

In JavaScript function defined inside has access to outer function variable and function is the first class object so it can be returned by function as well and passed as argument in another function.
- A function is an instance of the Object type
- A function can have properties and has a link back to its constructor method
- Function can be stored as variable
- Function can be pass as a parameter to another function
- Function can be returned from function

**Source:** _github.com/ganqqwerty_

#### Q35: Explain event bubbling and how one may prevent it ⭐⭐
**Answer:**
**Event bubbling** is the concept in which an event triggers at the deepest possible element, and triggers on parent elements in nesting order. As a result, when clicking on a child element one may exhibit the handler of the parent activating.

One way to prevent event bubbling is using `event.stopPropagation()` or `event.cancelBubble` on IE < 9.

**Source:** _https://github.com/kennymkchan_

#### Q36: Provide some examples of non-bulean value coercion to a boolean one ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q37: How to compare two objects in JavaScript? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q38: What will be the output of the following code? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q39: What is the drawback of creating true private in JavaScript? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q40: Write a recursive function that returns the binary string of a given decimal number ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q41: What will be the output of the following code? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q42: What will be the output of the following code? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q43: When should we use generators in ES6? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q44: What is IIFEs (Immediately Invoked Function Expressions)? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q45: Given two strings, return true if they are anagrams of one another ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q46: Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique! ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q47: What will the following code output? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q48: Write a function that would allow you to do this ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q49: Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q50: Given an array of integers, find the largest product yielded from three of the integers ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q51: Check if a given string is a palindrome. Case sensitivity should be taken into account. ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q52: What's the difference between using “let” and “var” to declare a variable in ES6? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q53: When should I use Arrow functions in ES6? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q54: What is the motivation for bringing Symbols to ES6? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q55: What is generator in JS? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q56: What are the benefits of using spread syntax in ES6 and how is it different from rest syntax? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q57: Explain the difference between "undefined" and "not defined" in JavaScript ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q58: What is 'Currying'? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q59: What is the definition of a higher-order function? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q60: What are the differences between ES6 class and ES5 function constructors? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q61: Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}` ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q62: Could you explain the difference between ES5 and ES6 ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q63: What is the difference between a shim and a polyfill? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q64: What are the advantages and disadvantages of using "use strict"? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q65: Describe closure concept in JavaScript as best as you could ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q66: What is the difference between anonymous and named functions?  ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q67: What is the difference between document `load` event and document `DOMContentLoaded` event? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q68: Why is extending built-in JavaScript objects not a good idea? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q69: Explain `Function.prototype.bind`. ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q70: What's the difference between `.call` and `.apply`? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q71: What's a typical use case for anonymous functions? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q72: What is a closure, and how/why would you use one? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q73: What do you think of AMD vs CommonJS? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q74: Suggest one simple way of removing duplicates from an array using ES6 ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q75: Why should we use ES6 classes? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q76: What is the preferred syntax for defining enums in JavaScript? ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q77: Explain the difference between Object.freeze() vs const ⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q78: Can you give an example for destructuring an object or an array in ES6? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q79: Explain what is hoisting in Javascript ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q80: Explain prototype inheritance in JavaScript? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q81: What will the following code output? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q82: What does the term "Transpiling" stand for? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q83: How would you create a private variable in JavaScript? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q84: What is the "new" keyword in JavaScript? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q85: Explain the Prototype Design Pattern ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q86: How does the “this” keyword work? Provide some code examples. ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q87: What is the Temporal Dead Zone in ES6? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q88: Create a function that will evaluate if a given expression has balanced parentheses using stacks ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q89: Check if a given string is a isomorphic ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q90: When should you NOT use arrow functions in ES6? Name three or more cases. ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q91: Explain how JSONP works (and how it's not really Ajax) ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q92: What will be the output of the following code? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q93: What are the actual uses of ES6 WeakMap? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q94: Explain difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q95: What is Hoisting in JavaScript? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q96: What is “closure” in javascript? Provide an example? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q97: Can you describe the main difference between a `.forEach` loop and a `.map()` loop and why you would pick one versus the other? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q98: What's the difference between a variable that is: `null`, `undefined` or undeclared? How would you go about checking for any of these states? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q99: How can you share code between files? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q100: Explain why the following doesn't work as an IIFE. What needs to be changed to properly make it an IIFE? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q101: Write a recursive function that performs a binary search ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q102: What will be the output of the following code? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q103: Could you compare usage of Module Pattern vs Constructor/Prototype pattern? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q104: When would you use the "bind" function? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q105: Given an integer, determine if it is a power of 2. If so, return that number, else return -1 ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q106: Describe the JS module design pattern ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q107: How would you add your own method to the Array object so the following code would work? ⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q108: How to "deep-freeze" object in JavaScript? ⭐⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q109: Is JavaScript a pass-by-reference or pass-by-value language? ⭐⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q110: Can you give an example of a curry function and why this syntax offers an advantage? ⭐⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q111: In JavaScript, why is the “this” operator inconsistent? ⭐⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q112: What's the difference between ES6 Map and WeakMap? ⭐⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q113: Describe the Revealing Module Pattern design pattern ⭐⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q114: What is the difference between the await keyword and the yield keyword?  ⭐⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q115: Is it possible to reset an ECMAScript 6 generator to its initial state? ⭐⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>

#### Q116: Compare Async/Await and Generators usage to achive same functionality ⭐⭐⭐⭐⭐
Read answer on 👉 <a href='https://www.fullstack.cafe'>FullStack.Cafe</a>