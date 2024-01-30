

function getRandom(max) {
    return Math.floor(Math.random() * max);
}
  console.log(getRandom(101));
  // Expected output: 0, 100

  let returnedNumber = document.getElementById("number");
  returnedNumber.innerHTML = getRandom(101);
  // Når man klikker button så kommer der et nyt nummer
  
  let newNumberButton = document.getElementById("newnumber_button");
  newNumberButton.addEventListener("click", randomNumberClick);
  
  function randomNumberClick(max) {
    let newRandomNumber = getRandom(101);
    returnedNumber.innerHTML = newRandomNumber;
    console.log(newRandomNumber);
  }
  
  