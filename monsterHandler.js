//Global selectors 
const enemydamage = document.querySelector(".updates"); 

//Enemy options object 
const enemyStatObject = {
    enemy: ["Goblin", "Golem", "Wraight", "Wounded Satyr"],
    loot: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 3],
    hp: [9, 10, 11, 12, 13, 13, 13, 14, 14, 14, 15, 15, 16, 17],
    str: [1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5],
    int: [1, 1, 1, 2, 2, 3, 3, 4, 5],
    def: [1, 1, 1, 2,2, 2, 2, 2, 2, 3, 3, 3, 4, 5, 5, 8,9],
    mdef: [1,1,1,1,2,2,2,2,3,3,3,4,4,5,9],
  
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
    this.mdef = enemyStatObject.getRandomEnemy("mdef"); 
    this.loot = enemyStatObject.getRandomEnemy("loot");
        
    this.update = function() { 
      const enemyName = document.querySelector("#enemy-name");
      const enemyStr = document.querySelector("#enemy-str"); 
      const enemyInt = document.querySelector("#enemy-int"); 
      const enemyDef = document.querySelector("#enemy-def"); 
      const enemyMDef = document.querySelector("#enemy-mdef");
      const enemyHealth = document.querySelector("#enemy-health"); 
      const enemyTotalHealth = document.querySelector("#enemy-total-health"); 
    
      enemyInt.innerHTML = this.int;
      enemyDef.innerHTML = this.def; 
      enemyMDef.innerHTML = this.mdef; 
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
    };
    this.enemyLootDrop = function() { 
      if(this.loot >= 1) { 
        const monsterLoot = ["healthPotion", "strengthPotion", "manaPotion", "deathPotion"]; 
        do { 
          let loot = monsterLoot[Math.floor(Math.random() * monsterLoot.length)];
          player[`${loot}`]++
          this.loot--

          let lootUpdateBox = document.querySelector(".loot-updates"); 
          let lootUpdate = document.createElement("DIV"); 
          lootUpdate.classList.add("update-box-loot"); 
          lootUpdate.innerHTML = `${this.name} dropped a ${loot}!` 
          lootUpdateBox.appendChild(lootUpdate); 
          updateScroll()
        } while (this.loot > 0)
      };
    };

    //Attacks and stats based on specific Enemy
    //Goblin 
    if (this.name === "Goblin") {
      this.exp = 25;
      this.type = "melee"
      this.img = "./images/goblin.png"
      this.attack = function() {
        let attackdamage = (this.str + Math.floor(Math.random() * this.str - player.def));
        if (attackdamage < 0) { 
            attackdamage = 0; 
        };
        player.health -= attackdamage;
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
    } 
    if (this.name === "Golem") {
      this.exp = 50;
      this.type = "melee"
      this.img = "./images/golem.png";
      this.attack = function() { 
        let attackdamage = (this.str + Math.floor(Math.random() * this.str + 1));
        if (attackdamage < 0) { 
          attackdamage = 0; 
        };
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
      //Wraight
    }
    if (this.name === "Wraight") {
      this.exp = 40;
      this.type = "Caster"
      this.str = 0; 
      this.int += 2
      this.img = "./images/wraight.png";
      this.attack = function() { 
        let attackdamage = (this.int + Math.floor(Math.random() * this.int));
        if (attackdamage < 0) { 
          attackdamage = 0; 
        };
        player.health -= attackdamage;
        if (player.health <= 0) { 
          player.health = 0; 
        }; 
        let EnemyUpdateBox = document.createElement("DIV"); 
        EnemyUpdateBox.classList.add("update-box-enemy"); 
        EnemyUpdateBox.innerHTML = `${this.name} Runs towards ${player.name} in anger and knocks you over for ${attackdamage} points of damage!` 
        enemydamage.appendChild(EnemyUpdateBox); 
        updateScroll();
      };
    };
    if (this.name === "Wounded Satyr") {
      this.exp = 30;
      this.int = 0; 
      this.type = "melee"
      this.img = "./images/satyr.png";
      this.health -= 4;
      this.attack = function() { 
        let attackdamage = (this.str + Math.floor(Math.random() * this.str + 1.5));
        
        if (attackdamage < 0) { 
          attackdamage = 0; 
        };
        player.health -= attackdamage;
        if (player.health <= 0) { 
          player.health = 0; 
        }; 
        let EnemyUpdateBox = document.createElement("DIV"); 
        EnemyUpdateBox.classList.add("update-box-enemy"); 
        EnemyUpdateBox.innerHTML = `${this.name} casts a fireball towards ${player.name} for ${attackdamage} points of damage!` 
        enemydamage.appendChild(EnemyUpdateBox); 
        updateScroll();
      };
    };
  };
};

//sprites download 
//https://craftpix.net/download/1727/