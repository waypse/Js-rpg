let bubble = document.querySelector('.bubble');
const container = document.querySelector(".board");
let position = {x: 1, y: 1};
let rows = 16;
let cols = 16;

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let table = new Table
table.drawtable(rows,cols)

let circle = document.createElement("div");

let player = new Hero("Slava",250,20,40)
player.drawhero();
player.stats()

let caillou = new Obstacle(50)
caillou.drawobs();
caillou.stats();

let c = new Obstacle(50)
c.drawobs();
c.stats();

const keys = {
    left: 37,
    up: 38,
    right: 39,
    down: 40
};


function handleKey(e) {
    let newposX;
    let newposY;
    switch (e.keyCode) {
      case keys.left:
        if(position.x >0){
        // position.x--;
        newposX = position.x--
        }
        break;
      case keys.up:
        if(position.y >0){
        // position.y--;
        newposY = position.y--
        }
        break;
      case keys.right:
        if(position.x <rows-1){
        // position.x++;
        newposX = position.x++
        }
        break;
      case keys.down:
        if(position.y <cols-1){
        // position.y++;
        newposY = position.y++
        }
        break;
    }
    let gridItem = document.querySelector(".X" + position.x + 'Y' + position.y);
    if(gridItem.classList.contains("obs")){}

    gridItem.appendChild(circle);
}

window.addEventListener("keydown", handleKey);