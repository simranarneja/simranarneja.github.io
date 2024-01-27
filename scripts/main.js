// Image switcher

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/green-m5-cs.png') {
    myImage.setAttribute ('src','images/light-green-m5.jpeg');
  } else {
    myImage.setAttribute ('src','images/green-m5-cs.png');
  }
}

// welcome message 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'BMWs are cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'BMWs are cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}