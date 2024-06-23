const coding = ["js" , "java" , "c++" , "python"] ;
coding.forEach(  function (item) { // this is callback function which in not allow a function Name 
    console.log(item);
} )

/*
js
java
c++
python

*/

// Other function

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);
/*
js
java
c++
python
*/

// Interesting  facts 
coding.forEach( (item , index, arr) => {
    console.log(item , index, arr);
})

/*
js 0 [ 'js', 'java', 'c++', 'python' ]
java 1 [ 'js', 'java', 'c++', 'python' ]
c++ 2 [ 'js', 'java', 'c++', 'python' ]
python 3 [ 'js', 'java', 'c++', 'python' ]

*/




const myCoding  = [
    {
        laguageName : "javaScript",
        languageFilename:"js"
    },
    {
        laguageName : "java",
        languageFilename:".java"
    },
    {
        laguageName : "javaScript",
        languageFilename:"js"
    },
    {
        laguageName : "python",
        languageFilename:".py"

    }
]

myCoding.forEach((item)=> {
    console.log(item.laguageName)
})
/*
javaScript
java
javaScript
python
*/
















