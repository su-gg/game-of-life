const canvas = document.querySelector("#firstgame");
const ctx = canvas.getContext("2d");

const game = new firstgame1();
game.gameSetUp();
window.onload = () => {
  document.querySelector("#start").addEventListener("click", () => {
    game.arrayRandomize();
    game.fillArray();
    window.setInterval(() => {
      game.runGame();
    }, 300);
  });
  document.querySelector("#stop").addEventListener("click", () => {
    game.gameSetUp();
  });
};
