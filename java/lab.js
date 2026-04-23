const player = document.getElementById("player");
const game = document.getElementById("game");
const goal = document.getElementById("goal");

let x = 20;
let y = 20;
let step = 20;

/* posição do tesouro */
let goalX = 720;
let goalY = 520;

goal.style.left = goalX + "px";
goal.style.top = goalY + "px";

/* 🧱 colisão com paredes */
function colisao(nx, ny) {
  const playerBox = {
    x: nx,
    y: ny,
    w: 40,
    h: 40
  };

  const walls = document.querySelectorAll(".wall");

  for (let wall of walls) {
    const rect = wall.getBoundingClientRect();
    const gameRect = game.getBoundingClientRect();

    let wx = rect.left - gameRect.left;
    let wy = rect.top - gameRect.top;
    let ww = rect.width;
    let wh = rect.height;

    if (
      playerBox.x < wx + ww &&
      playerBox.x + playerBox.w > wx &&
      playerBox.y < wy + wh &&
      playerBox.y + playerBox.h > wy
    ) {
      return true;
    }
  }

  return false;
}

/* 🎮 movimento */
document.addEventListener("keydown", (e) => {

  let nx = x;
  let ny = y;

  if (e.key === "ArrowUp" || e.key === "w") ny -= step;
  if (e.key === "ArrowDown" || e.key === "s") ny += step;
  if (e.key === "ArrowLeft" || e.key === "a") nx -= step;
  if (e.key === "ArrowRight" || e.key === "d") nx += step;

  /* limites */
  if (nx < 0 || ny < 0 || nx > 760 || ny > 560) return;

  /* colisão */
  if (colisao(nx, ny)) return;

  x = nx;
  y = ny;

  player.style.left = x + "px";
  player.style.top = y + "px";

  /* vitória */
  if (x === goalX && y === goalY) {
    alert("🏆 Você venceu!");
  }
});