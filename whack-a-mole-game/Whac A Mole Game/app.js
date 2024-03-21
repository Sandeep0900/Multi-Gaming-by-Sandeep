let currMoleTile;
let currPlantTile;
let score = 0;
gameOver = false;



window.onload = function(){
    setGame();
}

function setGame() {
    // set up the grid for the game board in html
    for(let i=0; i<9; i++){
    // <div id="0-8"></div>
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
    }
    
 setInterval(setMole, 1000);//2000 milliseconds = 2 seconds
 setInterval(setPlant, 2000);//3000 milliseconds = 3 seconds
}


function getRandomTile(){
    // Math.random --> (0-1)*9 => (0-9) --> round down to(0-8) integers;
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setMole(){


    if(gameOver){
        return;
    }

    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "assite/monty-mole.png";

    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id ==num){
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if(gameOver){
        return;
    }

    if(currPlantTile){
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "assite/piranha-plant.png"

    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num){
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if(gameOver){
        return;
    }
    if(this == currMoleTile){
        score = score + 10;
        document.getElementById("score").innerText = `${score}`;
    }
    else if(this == currPlantTile) {
        document.getElementById("score").innerText = `GAME OVER: ${score}`;
        gameOver = true;
    }
    if(gameOver){
        restart();
    }
}

function restart() {
    let restart = document.createElement("button");
    restart.innerText = "RESTAR THE GAME";
    restart.classList.remove("delete");
    restart.classList.add("restart");
    document.getElementById("board").append(restart);
    restart.addEventListener("click", () => {

        score = 0;
        document.getElementById("score").innerText = `${score}`;

        gameOver = false;
        restart.classList.remove("restart");
        restart.classList.add("delete");
    });
    
}