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

var myButton = document.querySelector('button');
myButton.onclick = function() {
  setUserName();
}

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}

//check to see if we already know user's name, if not, request it and save it
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'You smell, ' + storedName;
}

/*  SAMPLE ALERT
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/
