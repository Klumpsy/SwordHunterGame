//Game Controller 
class Game { 
    constructor() { 
        this.newGame = function() { 
            player = new Player(prompt("What is your name?"), "Elf"); 
            player.update(); 
            player.updateHealth(); 

        };
        this.newEnemy = function() {
            enemy = new Enemy(); 
            enemy.update(); 
            enemy.updateHealth(); 
        };
        this.checkEnemyDefeat = function() { 
            const displayDefeatedEnemys = document.querySelector("#defeated-enemy-count");
            if(enemy.health === 0) { 
                enemy.enemyLootDrop();
                enemy = new Enemy(); 
                enemy.update(); 
                enemy.updateHealth();
                enemy.enemyUpdateImage(); 
                player.exp += enemy.exp; 
                defeatedEnemys++; 
                player.def -= player.blockTimes;
                player.blockTimes = 0; 
                displayDefeatedEnemys.innerHTML = defeatedEnemys; 
                //Removing all updates from previous monster
                while (updates.firstChild) {
                    updates.removeChild(updates.lastChild);
                }; 
            };
            if (player.exp >= player.neededExp) {
                player.exp = 0
                player.neededExp += Math.floor((player.neededExp * 0.10));
                player.lvl++
                player.totalHealth++
                player.totalMana++
                player.health = player.totalHealth; 
                player.mana = player.totalMana;  
                player.updateHealth(); 
                //If player hits lvl 3, 6, 9...=> gain strength lvl
                if(player.lvl % 3 === 0) { 
                    player.str += 1; 
                };
            };
            player.update(); 
        };
        this.checkPlayerDefeat = function() { 
            if(player.health === 0) { 
                let playerDefeat = confirm(`Oh no! ${enemy.name} got the best of you! You Killed ${defeatedEnemys} though, Would you like to play again?`)
                playerDefeat ? location.reload() : window.close(); 
            };
        };
    };
};

//Start the game 
let player = new Player(); 
let enemy = new Enemy(); 
const game = new Game(); 
window.onload = game.newGame(), game.newEnemy(); 
enemy.enemyUpdateImage(); 

//Defeated enemys
let defeatedEnemys = 0; 

const newGameButton = document.querySelector("#new-game-button"); 
newGameButton.addEventListener("click", () => { 
    game.newGame(); 
    game.newEnemy(); 
}); 

const updates = document.querySelector(".updates"); 
const updatesLoot = document.querySelector(".loot-updates")
function updateScroll(){
    updates.scrollTop = updates.scrollHeight;
    updatesLoot.scrollTop = updatesLoot.scrollHeight;
}


