class Soldier {
  //attributes
  constructor (health , strength) {
    this.health = health;
    this.strength = strength;
  }
  //methods
  attack () {
    return this.strength
  }  
  receiveDamage (damage) {
    this.health -= damage
  }  
}

// Viking
class Viking extends Soldier {
  constructor (name , health , strength){
  super(health, strength);
    this.name = name    
  }  
  receiveDamage(damage) {
    this.health -= damage    
    if (this.health >0) {
      return `${this.name} has received ${damage} points of damage`
    }
    else if (this.health <= 0 ) {
      return `${this.name} has died in act of combat`
    }
  }
  
  battleCry() {
    return `Odin Owns You All!`
  }  
}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength) {
    super (health,strength);
  }
  //methods
  receiveDamage(damage) {
    this.health -= damage
    if (this.health >0) {
      return `A Saxon has received ${damage} points of damage`
    }
    else if (this.health <= 0 ) {
      return `A Saxon has died in combat`
    }
  }  
}


// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  
  addViking(Viking) {
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  }

  vikingAttack() {
    
    // if (this.saxonArmy[0].health === 0) {
    //   this.saxonArmy[0].unshift
    // }

    // if (this.saxonArmy[0].health <= 0) {
    //   this.saxonArmy[0].splice(this.saxonArmy[0],1)
    // }    
    return this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack());
    }
    
  
  
  saxonAttack(){
    return this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack());
  }



  showStatus() {
    if (this.saxonArmy.length === 0) {
       return `Vikings have won the war of the century!`;
    }
    else if (this.vikingArmy.length === 0) {
       return `Saxons have fought their lives and survived another day...`;
    }
    else {
       return `Vikings and Saxons are still in the thick of battle.`;
    }

  }

}


// TESTES CONSOLE.LOG











// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
