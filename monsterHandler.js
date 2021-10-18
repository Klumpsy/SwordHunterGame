//Enemy options object 
const enemyStatObject = {
    enemy: ["Goblin", "Golem"],
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
    this.name = enemyStatObject.getRandomEnemy("enemy");
    this.totalHealth = enemyStatObject.getRandomEnemy("hp");
    this.health = this.totalHealth;
    this.str = enemyStatObject.getRandomEnemy("str");
    this.int = enemyStatObject.getRandomEnemy("int");
    this.def = enemyStatObject.getRandomEnemy("def");
    this.loot = enemyStatObject.getRandomEnemy("loot");
        
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
      const enemyHealthBar = document.querySelector("#enemy-health-inner");
      enemyHealthBar.max = this.totalHealth;
      enemyHealthBar.min = 0;
      enemyHealthBar.value = this.health; 
      enemyHealthBar.high = (this.totalHealth);
      enemyHealthBar.low = (this.totalHealth / 3);
      enemyHealthBar.optimum = (this.totalHealth / 2);
    };
    this.enemyUpdateImage = function() { 
      const enemyImg = document.querySelector("#enemy-image");
      const enemyImgContainer = document.createElement("IMG"); 
      enemyImg.removeChild(enemyImg.lastChild); 
      
      enemyImgContainer.src = enemy.img; 
      enemyImg.appendChild(enemyImgContainer);
    }

    //Attacks and stats based on specific Enemy
    //Goblin 
    if (this.name === "Goblin") {
      this.exp = 25;
      this.type = "melee"
      this.img = "./images/goblin.png"
      this.attack = function() { 
        const enemydamage = document.querySelector(".updates"); 
        const attackdamage = (this.str + Math.floor(Math.random() * this.str));
        player.health -= attackdamage
          if (player.health <= 0) { 
            player.health = 0; 
          };
          let EnemyUpdateBox = document.createElement("DIV"); 
          EnemyUpdateBox.classList.add("update-box-enemy"); 
          EnemyUpdateBox.innerHTML = `${this.name} hit ${player.name} for ${attackdamage} points of damage!` 
          enemydamage.appendChild(EnemyUpdateBox); 
          updateScroll()
      };

    //Giant 
    } else if (this.name === "Golem") {
      this.exp = 50;
      this.type = "melee"
      this.img = "./images/golem.png";
      this.attack = function() { 
        const enemydamage = document.querySelector(".updates"); 
        const attackdamage = (this.str + Math.floor(Math.random() * this.str + 1));
        player.health -= attackdamage;
          if (player.health <= 0) { 
            player.health = 0; 
          }; 
          let EnemyUpdateBox = document.createElement("DIV"); 
          EnemyUpdateBox.classList.add("update-box-enemy"); 
          EnemyUpdateBox.innerHTML = `${this.name} hit ${player.name} for ${attackdamage} points of damage!` 
          enemydamage.appendChild(EnemyUpdateBox); 
          updateScroll();
      };
    };
  };
};


//sprites download 
//https://craftpix.net/download/1727/