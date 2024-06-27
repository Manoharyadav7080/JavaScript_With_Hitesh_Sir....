# project related to Dom 
## project link 
[click hear](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# solution code 

## project 3

``` javascript

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);