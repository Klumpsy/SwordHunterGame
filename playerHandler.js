//Player constructor class
class Player { 
    constructor(name, race) { 
        this.name = name;
        this.race = race;
        this.totalHealth = 20; 
        this.health = this.totalHealth;
        this.str = 3; 
        this.int = 3; 
        this.def = 4;
        this.lvl = 1;
        this.exp = 0;
        this.neededExp = 100;  

        //Player introduce Method
        this.introduce = function() { 
            console.log(`Hello, my name is ${this.name}, I'm an ${this.race}.`);
        };
        //Player Attack Methods
        //Slash attack
        this.slash = function() { 
          const playerdamage = document.querySelector(".updates"); 
          const slashdamage = (this.str + Math.floor(Math.random() * this.str));
          enemy.health -= slashdamage

          //Create updateBox 
          let playerUpdateBox = document.createElement("DIV"); 
          playerUpdateBox.classList.add("update-box-player"); 
          playerUpdateBox.innerHTML = `You hit ${enemy.name} for ${slashdamage} points of damage!` 
          playerdamage.appendChild(playerUpdateBox); 
          updateScroll()

          if (enemy.health <= 0) { 
            enemy.health = 0; 
          }; 
        };

        //Healing skill
        this.heal = function() { 
          if(this.health <= this.totalHealth) { 
            const playerdamage = document.querySelector(".updates"); 
            const playerUpdateBox = document.createElement("DIV");
            const healingPower = [3,3,4,4,4,5,5,5,6,6,7,10]
            const randomHeal = healingPower[Math.floor(Math.random() * healingPower.length)]; 
            this.health += randomHeal;  

            playerUpdateBox.classList.add("update-box-player"); 
            playerUpdateBox.innerHTML = `You healed yourself for ${randomHeal} points of Health!` 
            playerdamage.appendChild(playerUpdateBox); 
            updateScroll()

            if(this.health >= this.totalHealth) { 
              this.health = this.totalHealth; 
            };
          };
        };

        //Player update Method
        this.update = function() { 
            const playerName = document.querySelector("#player-name");
            const playerLevel = document.querySelector("#player-level"); 
            const playerStr = document.querySelector("#str"); 
            const playerInt = document.querySelector("#int"); 
            const playerDef = document.querySelector("#def"); 
            const playerHealth = document.querySelector("#health"); 
            const playerTotalHealth = document.querySelector("#total-health");
            const playerExp = document.querySelector("#player-exp"); 
            const playerExpNeeded = document.querySelector("#player-exp-needed"); 

            playerInt.innerHTML = this.int;
            playerDef.innerHTML = this.def; 
            playerStr.innerHTML = this.str; 
            playerLevel.innerHTML = this.lvl; 
            playerName.innerHTML = this.name; 
            playerTotalHealth.innerHTML = this.totalHealth;
            playerHealth.innerHTML = this.health; 
            playerExp.innerHTML = this.exp; 
            playerExpNeeded.innerHTML = this.neededExp;   
        };

        this.updateHealth = function() { 
            const playerHealthBar = document.querySelector("#health-inner");
            playerHealthBar.max = this.totalHealth;
            playerHealthBar.value = this.health; 
            playerHealthBar.high = (this.totalHealth);
            playerHealthBar.low = (this.totalHealth / 3);
            playerHealthBar.optimum = (this.totalHealth / 2);
        };
    };
};

//Player SlashAttack
const slashAttack = document.querySelector("#slash"); 
slashAttack.addEventListener("click", () => { 
  player.slash();
  enemy.attack(); 
  enemy.update(); 
  enemy.updateHealth(); 
  player.update(); 
  player.updateHealth();
  game.checkPlayerDefeat(); 
  game.checkEnemyDefeat(); 
});

//Player Heal
const playerHeal = document.querySelector("#heal");
playerHeal.addEventListener("click", () => { 
  player.heal(); 
  enemy.attack(); 
  player.update(); 
  player.updateHealth(); 
  game.checkPlayerDefeat(); 
});