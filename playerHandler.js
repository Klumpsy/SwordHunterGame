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

        //Player introduce Method
        this.introduce = function() { 
            console.log(`Hello, my name is ${this.name}, I'm an ${this.race}.`);
        };
        //Player Attack Methods
        this.slash = function() { 
            return (this.str + Math.floor(Math.random() * this.str)); 
        }
        //Player update Method
        this.update = function() { 
            const playerName = document.querySelector("#player-name");
            const playerLevel = document.querySelector("#player-level"); 
            const playerStr = document.querySelector("#str"); 
            const playerInt = document.querySelector("#int"); 
            const playerDef = document.querySelector("#def"); 
            const playerHealth = document.querySelector("#health"); 
            const playerTotalHealth = document.querySelector("#total-health"); 

            playerInt.innerHTML = this.int;
            playerDef.innerHTML = this.def; 
            playerStr.innerHTML = this.str; 
            playerLevel.innerHTML = this.lvl; 
            playerName.innerHTML = this.name; 
            playerTotalHealth.innerHTML = this.totalHealth;
            playerHealth.innerHTML = this.health; 
            
        };

        this.updateHealth = function() { 
            const playerHealthBar = document.querySelector("#health-bar");
            if(this.health <= (Math.floor(this.totalHealth / 2))) { 
              playerHealthBar.style.backgroundColor = "orange"; 
            }
            if (this.health < (Math.floor(this.totalHealth / 3))) { 
              playerHealthBar.style.backgroundColor = "red"; 
            };
          };
    };
};

