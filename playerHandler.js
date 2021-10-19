//Global selectors for game updates 
const playerdamage = document.querySelector(".updates"); 

//Player constructor class
class Player { 
    constructor(name, race) { 
        this.name = name;
        this.race = race;
        this.totalHealth = 20; 
        this.totalMana = 10
        this.health = this.totalHealth;
        this.mana = this.totalMana; 
        this.str = 4; 
        this.int = 3; 
        this.def = 4;
        this.blockTimes = 0; 
        this.lvl = 1;
        this.exp = 0;
        this.neededExp = 100;
        
        //Health Potions
        this.healthPotion = 2; 
        this.strenghtPotion = 1;
        this.manaPotion = 1; 
        this.deathPotion = 2;  

        //Player introduce Method
        this.introduce = function() { 
            console.log(`Hello, my name is ${this.name}, I'm an ${this.race}.`);
        };
        //Player Attack Methods
        //Slash attack
        this.slash = function() { 
          let slashdamage = (this.str + Math.floor(Math.random() * this.str - enemy.def));
          if(slashdamage < 0) { 
            slashdamage = 0; 
          }
          enemy.health -= slashdamage;

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

        //Player Block (increment defence by one for 3 times)
        this.block = function() {  
          if (this.blockTimes < 3 && this.health > 3) {
            player.def++ 
            this.blockTimes++
            this.health -= 3; 

            //Create updateBox with str gain and health loss
            let playerUpdateBox = document.createElement("DIV"); 
            playerUpdateBox.classList.add("update-box-player"); 
            playerUpdateBox.innerHTML = `You gained 1 str at the cost of 3 hp for a short amount of time!` 
            playerdamage.appendChild(playerUpdateBox); 
            updateScroll()

          } else { 
            if (this.health <= 3){
              alert("You can't use that spell, it will kill you..")
            } else { 
              alert("You already increased your strength to the max this fight..")
            };
          };
        };

        //Healing skill
        this.heal = function() { 
          if(this.health <= this.totalHealth && this.mana > 0) {  
            const playerUpdateBox = document.createElement("DIV");
            const healingPower = [5,5,5,6,6,7,8,10]
            const randomHeal = healingPower[Math.floor(Math.random() * healingPower.length)]; 
            this.health += randomHeal;  
            this.mana > 0 ? this.mana-- : this.mana = 0;

            //Create updatebox with amount that is healed
            playerUpdateBox.classList.add("update-box-player"); 
            playerUpdateBox.innerHTML = `You healed yourself for ${randomHeal} points of Health!` 
            playerdamage.appendChild(playerUpdateBox); 
            updateScroll()
            player.update(); 

            if(this.health >= this.totalHealth) { 
              this.health = this.totalHealth; 
            };
          } else {
          alert("You have no mana to heal yourself..");
          };
        };

        //Magic Attack
        this.magic = function() { 
          let magicdamage = (this.int + Math.floor(Math.random() * this.int - enemy.mdef));
          if(magicdamage < 0) { 
            magicdamage = 0; 
          }
          enemy.health -= magicdamage;
          this.mana >= 2 ? this.mana -= 2 : alert("Not enough mana..");

          //Create updateBox 
          let playerUpdateBox = document.createElement("DIV"); 
          playerUpdateBox.classList.add("update-box-player"); 
          playerUpdateBox.innerHTML = `You cast a spell on ${enemy.name} for ${magicdamage} points of Magical damage!` 
          playerdamage.appendChild(playerUpdateBox); 
          updateScroll()

          if (enemy.health <= 0) { 
            enemy.health = 0; 
          };
        };

        //Player Potions
        this.potion = function(potion) {
        //Player Potions 
        let playerUpdateBox = document.createElement("DIV"); 
          playerUpdateBox.classList.add("update-box-player"); 
          playerUpdateBox.innerHTML = `You used a ${potion.id}!` 
          playerdamage.appendChild(playerUpdateBox); 
          updateScroll()

        if(potion.id === "strength-potion" && this.strenghtPotion > 0) { 
          this.str += 5;
          this.strenghtPotion--;
          player.update()
          setTimeout(() =>{this.str -= 5, player.update()}, 10000);
        } else if (potion.id === "health-potion" && this.healthPotion > 0) { 
          this.health = this.totalHealth;
          this.healthPotion--;
          player.update()
          player.updateHealth(); 
        } else if (potion.id === "mana-potion" && this.manaPotion > 0) { 
          this.mana = this.totalMana; 
          this.manaPotion--;
          player.update()
          player.updateHealth(); 
        } else if (potion.id === "death-potion" && this.deathPotion > 0) { 
          enemy.health = 0;
          this.deathPotion--;
          game.checkEnemyDefeat()
          player.update(); 
        } else { 
          alert("You don't have that potion!")
        };
      };
  
        //Player update Method
        this.update = function() { 
            //Player Stats
            const playerName = document.querySelector("#player-name");
            const playerLevel = document.querySelector("#player-level"); 
            const playerStr = document.querySelector("#str"); 
            const playerInt = document.querySelector("#int"); 
            const playerDef = document.querySelector("#def"); 
            const playerHealth = document.querySelector("#health"); 
            const playerTotalHealth = document.querySelector("#total-health");
            const playerExp = document.querySelector("#player-exp"); 
            const playerExpNeeded = document.querySelector("#player-exp-needed"); 
            const playerMana = document.querySelector("#mana"); 
            const playerTotalMana = document.querySelector("#total-mana"); 
            //Player Potions
            const healthPotionDisplay = document.querySelector("#health-potion-count"); 
            const strengthPotionDisplay = document.querySelector("#strength-potion-count"); 
            const manaPotionDisplay = document.querySelector("#mana-potion-count"); 
            const deathPotionDisplay = document.querySelector("#death-potion-count"); 

            playerInt.innerHTML = this.int;
            playerDef.innerHTML = this.def; 
            playerStr.innerHTML = this.str; 
            playerLevel.innerHTML = this.lvl; 
            playerName.innerHTML = this.name; 
            playerTotalHealth.innerHTML = this.totalHealth;
            playerTotalMana.innerHTML = this.totalMana; 
            playerHealth.innerHTML = this.health; 
            playerMana.innerHTML = this.mana; 
            playerExp.innerHTML = this.exp; 
            playerExpNeeded.innerHTML = this.neededExp;   

            //Update health potion count
            healthPotionDisplay.innerHTML = this.healthPotion;
            strengthPotionDisplay.innerHTML = this.strenghtPotion; 
            manaPotionDisplay.innerHTML = this.manaPotion; 
            deathPotionDisplay.innerHTML = this.deathPotion; 
        };

        //Player health update Method 
        this.updateHealth = function() { 
            const playerHealthBar = document.querySelector("#health-inner");
            const playerManabar = document.querySelector("#mana-inner");
            //health
            playerHealthBar.max = this.totalHealth;
            playerHealthBar.value = this.health; 
            playerHealthBar.high = this.totalHealth;
            playerHealthBar.low = (this.totalHealth / 3);
            playerHealthBar.optimum = (this.totalHealth / 2);

            //Mana
            playerManabar.max = this.totalMana; 
            playerManabar.value = this.mana; 
            playerManabar.high = this.totalMana
            playerManabar.low = (this.totalMana / 3); 
            playerManabar.optimum = (this.totalMana / 2); 
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

//Player Block
const playerBlock = document.querySelector("#defence"); 
playerBlock.addEventListener("click", () => { 
  player.block(); 
  player.update();
  player.updateHealth(); 
  game.checkPlayerDefeat(); 
});

//Player Magic 
const playerMagic = document.querySelector("#magic"); 
playerMagic.addEventListener("click", () => { 
  player.magic();
  enemy.attack(); 
  enemy.update(); 
  enemy.updateHealth(); 
  player.update(); 
  player.updateHealth();
  game.checkPlayerDefeat(); 
  game.checkEnemyDefeat(); 
})

//Player potions
const playerPotions = document.querySelectorAll(".potion"); 
for(let i = 0; i < playerPotions.length; i++) { 
  playerPotions[i].addEventListener("click", () => { 
    player.potion(playerPotions[i]);
  });
}
