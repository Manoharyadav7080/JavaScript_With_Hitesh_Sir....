const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
/*

Note :- 


 _______________________     setInterval(function, delay, ...arguments);  ____________________


function: The function to be executed every delay milliseconds.
delay: The time interval (in milliseconds) between each execution of the function.
arguments (optional): Additional arguments to be passed to the function.



*/



