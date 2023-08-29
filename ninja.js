class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 90;
    this.speed = 3;
    this.strength = 3;
  }
  sayName() {
    console.log("your name is " + this.name);
  }
  showStats() { 
    console.log(
      "Name: " + this.name,
      "Health: " + this.health,
      "Speed: " + this.speed,
      "Strength: " + this.strength
    );
    // ^noticed i could put back tics in the quotes like below
  }
  drinkSake(){
    this.health += 10
    console.log(
        `Name: ${this.name}
        Health: ${this.health},
        Speed: ${this.speed},
        Strength: ${this.strength}`
      );
  }
}

const ethan = new Ninja("Ethan")
ethan.sayName();
ethan.showStats();
ethan.drinkSake();
