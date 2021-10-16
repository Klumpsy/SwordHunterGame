//Enemy options object 
const enemy = {
    enemy: ["Goblin", "Giant"],
    loot: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 3],
    hp: [12, 13, 14, 15, 16, 17],
    str: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5],
    int: [1, 1, 1, 2, 2, 3, 3, 4, 5],
    def: [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4],
  
    getRandomEnemy(type) {
      return this[type][Math.floor(Math.random() * this[type].length)];
    },
  };

//Create new random enemy instance
class Enemy {
  constructor() { 
    this.name = enemy.getRandomEnemy("enemy");
    this.totalHealth = enemy.getRandomEnemy("hp");
    this.health = this.totalHealth;
    this.str = enemy.getRandomEnemy("str");
    this.int = enemy.getRandomEnemy("int");
    this.def = enemy.getRandomEnemy("def");
    this.loot = enemy.getRandomEnemy("loot");
        
    this.update = function() { 
      const enemyName = document.querySelector("#enemy-name");
      const enemyStr = document.querySelector("#enemy-str"); 
      const enemyInt = document.querySelector("#enemy-int"); 
      const enemyDef = document.querySelector("#enemy-def"); 
      const enemyHealth = document.querySelector("#enemy-health"); 
      const enemyTotalHealth = document.querySelector("#enemy-total-health"); 
      enemyInt.innerHTML = this.int;
      enemyDef.innerHTML = this.def; 
      enemyStr.innerHTML = this.str;
      enemyName.innerHTML = this.name; 
      enemyTotalHealth.innerHTML = this.totalHealth;
      enemyHealth.innerHTML = this.health;
    };

    this.updateHealth = function() { 
      const enemyHealthBar = document.querySelector(".enemy-health-bar");
      if(this.health <= (Math.floor(this.totalHealth / 2))) { 
        enemyHealthBar.style.backgroundColor = "orange"; 
      }
      if (this.health < (Math.floor(this.totalHealth / 3))) { 
        enemyHealthBar.style.backgroundColor = "red"; 
      };
    };

        //Assign exp to newEnemy object
    if (this.name === "Goblin") {
      this.exp = 25;
      this.type = "melee"
    } else if (this.name === "Giant") {
      this.exp = 50;
      this.type = "melee"
    };
  };
};

//sprites download 
//https://craftpix.net/download/1727/