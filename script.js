let grid = document.querySelector(".grid");
let squares = document.querySelectorAll(".square");
let resetButton = document.getElementById("resetButton");
let selectCross = document.getElementById("cross")
let selectCircle = document.getElementById("circle")
let startgamebtn = document.getElementById("startgamebtn");
selectCross.checked = true;
let turnPicker = "";

(function resetAll() {
  resetButton.addEventListener("click", () => {
    squares.forEach((square) => {
      square.classList.remove("cross", "circle");
      turnPicker = "";
      startgamebtn.style.cssText = "display: block;"
    })
  })
})()

function checkWinner(){
    if (squares.item(0).className === "square cross" &&
     squares.item(1).className === "square cross" &&
      squares.item(2).className === "square cross" ||
      squares.item(3).className === "square cross" &&
     squares.item(4).className === "square cross" &&
      squares.item(5).className === "square cross" ||
      squares.item(6).className === "square cross" &&
     squares.item(7).className === "square cross" &&
      squares.item(8).className === "square cross" ||
      squares.item(0).className === "square cross" &&
     squares.item(3).className === "square cross" &&
      squares.item(6).className === "square cross" ||
      squares.item(1).className === "square cross" &&
     squares.item(4).className === "square cross" &&
      squares.item(7).className === "square cross" ||
      squares.item(2).className === "square cross" &&
     squares.item(5).className === "square cross" &&
      squares.item(8).className === "square cross" ||
      squares.item(0).className === "square cross" &&
     squares.item(4).className === "square cross" &&
      squares.item(8).className === "square cross" ||
      squares.item(2).className === "square cross" &&
     squares.item(4).className === "square cross" &&
      squares.item(6).className === "square cross"){
        alert("Cross won!")
        resetGame()
    }
    if (squares.item(0).className === "square circle" &&
     squares.item(1).className === "square circle" &&
      squares.item(2).className === "square circle" ||
      squares.item(3).className === "square circle" &&
     squares.item(4).className === "square circle" &&
      squares.item(5).className === "square circle" ||
      squares.item(6).className === "square circle" &&
     squares.item(7).className === "square circle" &&
      squares.item(8).className === "square circle" ||
      squares.item(0).className === "square circle" &&
     squares.item(3).className === "square circle" &&
      squares.item(6).className === "square circle" ||
      squares.item(1).className === "square circle" &&
     squares.item(4).className === "square circle" &&
      squares.item(7).className === "square circle" ||
      squares.item(2).className === "square circle" &&
     squares.item(5).className === "square circle" &&
      squares.item(8).className === "square circle" ||
      squares.item(0).className === "square circle" &&
     squares.item(4).className === "square circle" &&
      squares.item(8).className === "square circle" ||
      squares.item(2).className === "square circle" &&
     squares.item(4).className === "square circle" &&
      squares.item(6).className === "square circle"){
        alert("Circle won!")
        resetGame()
    }
}

function playGame() {
  squares.forEach((square) => {
    square.addEventListener("click", () => {
      if (
        turnPicker === "cross" &&
        square.className !== "square cross" &&
        square.className !== "square circle"
      ) {
        square.classList.add("cross");
        turnPicker = "circle";
        checkWinner()
      }
      if (
        turnPicker === "circle" &&
        square.className !== "square cross" &&
        square.className !== "square circle"
      ) {
        square.classList.add("circle");
        turnPicker = "cross";
        checkWinner()
      }
    })
  })
}

function resetGame(){
    squares.forEach((square) => {
        square.classList.remove("cross", "circle");
        turnPicker = "";
        startgamebtn.style.cssText = "display: block;"
      })
}


function playerSelection(){
if (selectCross.checked === true){
    turnPicker = "cross"
    return turnPicker
}
if (selectCircle.checked === true){
    turnPicker = "circle"
    return turnPicker
}
}

(function startGame(){
startgamebtn.addEventListener("click", () =>{
    startgamebtn.style.cssText = "display: none;"
    playerSelection()
    playGame()
})
})()




