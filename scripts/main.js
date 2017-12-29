//this is a comment
/*
This is also a comment
*/
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

//note that : document.querySelector('html').onclick = function() {};
//  is equivalent to the code below, and is the shorter syntax
/*
var myHTML = document.querySelector('html');
myHTML.onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

//NOTE: Code below will alternate the image of the page
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sweat.jpg') {
      myImage.setAttribute ('src','images/cat.jpg');
    } else {
      myImage.setAttribute ('src','images/sweat.jpg');
    }
}


/*  SAMPLE ALERT
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/
