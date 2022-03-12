let grid = document.querySelector(".grid");
let squares = document.querySelectorAll(".square");
let resetButton = document.getElementById("resetButton");
let turnPicker = "cross";

(function resetAll() {
  resetButton.addEventListener("click", () => {
    squares.forEach((square) => {
      square.classList.remove("cross", "circle");
      turnPicker = "cross";
     
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

(function playGame() {
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
})();

function resetGame(){
    squares.forEach((square) => {
        square.classList.remove("cross", "circle");
        turnPicker = "cross";
      })
}





