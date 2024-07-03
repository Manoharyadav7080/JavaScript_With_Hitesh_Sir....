const randommColor = function() {
    const hex = '1023456789ABCDEF';
    let color = '#';

    for(let i=0 ; i<6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;

}

let intervalId ;
const startChangiingColor = function () {

    if (!intervalId) {

        intervalId= setInterval( ChangrBgColor, 1000);
    }
    function ChangrBgColor() {
        document.body.style.background=  randommColor();

    }
}

const stoptChangiingColor = function () {

    clearInterval(intervalId);
    intervalId = null;


}






document.querySelector('#start').addEventListener('click' , startChangiingColor);

document.querySelector('#stop').addEventListener('click' , stoptChangiingColor);





