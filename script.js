//Game Controller 
class Game { 
    constructor() { 
        this.newGame = function() { 
            const player = new Player(prompt("What is your name?", "Elf")); 
            player.update(); 
            player.updateHealth(); 
        }
        this.newEnemy = function() { 
            const enemy = new Enemy(); 
            enemy.update(); 
            enemy.updateHealth(); 
        }

    }
}

const game = new Game(); 

const newGameButton = document.querySelector("#new-game-button"); 
newGameButton.addEventListener("click", () => { 
    game.newGame(); 
    game.newEnemy(); 
}); 
