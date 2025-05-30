let board = document.querySelector("#board");
let reset = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-game-btn");
let cells = document.querySelectorAll(".cell");
let winDisplayX = document.querySelector(".player-score");
let winDisplayO = document.querySelector(".player-scoreO");
let turnX = true;
let gameOver = false;

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const highlightWinningCells = (pattern) => {
  pattern.forEach((index) => {
    cells[index].classList.add("winning-cell");
  });
};
const highlightDrawCell = () => {
  cells.forEach((cell) => cell.classList.add("winning-cell"));
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let val1 = cells[pattern[0]].innerText;
    let val2 = cells[pattern[1]].innerText;
    let val3 = cells[pattern[2]].innerText;

    if (val1 && val1 === val2 && val2 === val3) {
      highlightWinningCells(pattern);
      if (val1 === "X") {
        winDisplayX.textContent = "Winner";
        winDisplayO.textContent = "Loser";
      } else {
        winDisplayO.textContent = "Winner";
        winDisplayX.textContent = "Loser";
      }
      gameOver = true;
      return true;
    }
  }

  // Check for draw
  if ([...cells].every((cell) => cell.innerText !== "")) {
    highlightDrawCell();
    winDisplayX.textContent = "It's a draw!";
    winDisplayO.textContent = "It's a draw!";
    gameOver = true;
    return true;
  }
  return false;
};

board.addEventListener("click", (e) => {
  if (gameOver) return;

  if (e.target.classList.contains("cell") && e.target.innerText === "") {
    e.target.innerText = turnX ? "X" : "O";
    turnX = !turnX;
    checkWinner();
  }
});

const resetGame = () => {
  cells.forEach((cell) => {
    cell.innerText = "";
    cell.classList.remove("winning-cell", "winning-cell");
  });
  turnX = true;
  gameOver = false;
  winDisplayX.textContent = "";
  winDisplayO.textContent = "";
};

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);

let themeBtn = document.querySelector("#theme-btn");
let themeIndex = 0;
const themes = [
  "linear-gradient(135deg,rgb(170, 209, 214) 0%,rgb(174, 191, 194) 100%)",
  "linear-gradient(135deg,rgb(128, 118, 83) 0%,rgb(188, 169, 115) 100%)",
  "linear-gradient(135deg,rgb(157, 180, 115) 0%,rgb(152, 111, 159) 100%)",
  "linear-gradient(135deg,rgb(102, 153, 106) 0%,rgb(142, 187, 217) 100%)",
  "linear-gradient(135deg,rgb(200, 150, 100) 0%,rgb(150, 200, 150) 100%)", 
];
function changeTheme() {
  document.body.style.background = themes[themeIndex];
  themeIndex = (themeIndex + 1) % themes.length; 
}
themeBtn.addEventListener("click", changeTheme);
