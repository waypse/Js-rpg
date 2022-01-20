class Hero {
    constructor(name, health, armor, damage) {
        this.name = name;
        this.health = health;
        this.armor = armor;
        this.damage = damage;        
    }

    stats(){
        // setInterval(function(){
            let heroBubble = document.createElement("p");
            heroBubble.innerHTML= `health: `+ this.health + ` name: `+ this.name +` damage: `+ this.damage +` armor: `+ this.armor;
            bubble.appendChild(heroBubble);
        // },50)
    }

    drawhero(){
        circle.className = 'circle';
        let firstGridItem = document.querySelector(".X1Y1");
        firstGridItem.appendChild(circle);
    }
}

class Table {
    drawtable(rows, cols) {
        container.style.setProperty("--grid-rows", rows);
        container.style.setProperty("--grid-cols", cols);
        
        let x = 0;
        let y = 0;
        for (let c = 0; c < rows * cols; c++) {
            let cell = document.createElement("div");
            x = c%cols;
            container.appendChild(cell).className = "grid-item X" + x + 'Y' + y;
            if (x === (rows-1)){
                y++;
            }    
        }
    }
}

class Obstacle {
    constructor(health) {
        this.health = health;
    }
  
    stats(){
        // setInterval(function(){
            let obsBubble = document.createElement("p");
            obsBubble.innerHTML= `health: `+ this.health;
            bubble.appendChild(obsBubble);
        // },50)
    }

    drawobs(){
        let obs = document.createElement("div");
        obs.className = 'obs';
        let items = document.querySelector(".X"+rng(0,rows-1)+"Y"+rng(0,cols-1));
        items.appendChild(obs);
    }

    ifExists(){}
}