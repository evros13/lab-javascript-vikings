// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
        attack(){
            return this.strength;
        }

        receiveDamage(damage) {
            this.health = this.health - damage;
        }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry () {
        return "Odin Owns You All!"
    }
}




// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())]
        let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())]
        randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) { // REMEMBER TO FIND THE INDEX WITH INDEXOF
            let indexRandom = saxonArmy.indexOf(randomSaxon);
            this.saxonArmy.splice(indexRandom, 1)                        
        }
        return this.saxonArmy;
    }
    saxonAttack() {
        let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())]
        let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())]
        randomViking.receiveDamage(randomSaxon.strength);
    }
    showStatus() {
        if (Saxon = []) {
            return "Vikings have won the war of the century!";
        }
        else if (Viking = []) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else if (Viking >=1 && Saxon >=1) {
            return "vikings and Saxons are still in the thick of battle.";
        }

    }
}
